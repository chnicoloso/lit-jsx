import * as fs from "fs/promises";
import * as esbuild from "esbuild";
import { glob } from "glob";
import esbuildPluginTsc from "esbuild-plugin-tsc";
import { program } from "commander";

program.option("--clean", "Clean output directory");
program.option("--dist", "Enable distribution mode");
program.option("--no-source-maps", "Disable source maps");
program.parse();

const CLEAN_MODE = program.opts().clean;
const DIST_MODE = program.opts().dist;
const SOURCE_MAPS = program.opts().sourceMaps && !DIST_MODE;

function asArray(src) {
  if (Array.isArray(src)) return src;
  return [src];
}

async function compile(src) {
  console.log(`Build ${src}`);
  return esbuild.build({
    entryPoints: [src],
    outdir: "dist",
    outbase: src.substring(0, src.indexOf("/")),
    bundle: true,
    minify: true,
    treeShaking: true,
    sourcemap: SOURCE_MAPS,
    format: 'esm',
    plugins: [esbuildPluginTsc({
        force: true,
        tsconfigPath: "./tsconfig.json",
    })],
  });
}

async function run(cmd) {
    if (Array.isArray(cmd)) {
        for (let c of cmd) {
            await run(c);
        }
    } else if (cmd.compile !== undefined) {
        let src = asArray(cmd.compile);
        let allNames = await Promise.allSettled(
            src.map((p) => glob(p, { nodir: true }))
        );
        let allBuilds = allNames
            .filter((p) => p.status == "fulfilled")
            .flatMap((p) => p.value)
            .map(compile);
        await Promise.allSettled(allBuilds);
    }
}

let actions = {
  clean: DIST_MODE || CLEAN_MODE,
  build: !CLEAN_MODE,
};

if (actions.clean) {
  await fs.rm("dist", {
    force: true,
    recursive: true,
  });
}

const buildCommands = [ { compile: "./src/**" } ]

if (actions.build) run(buildCommands);
