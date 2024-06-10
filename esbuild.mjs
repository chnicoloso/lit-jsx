import * as fs from 'fs/promises';
import * as esbuild from 'esbuild';
import { glob } from 'glob';
import esbuildPluginTsc from 'esbuild-plugin-tsc';
import { program } from 'commander';

program.option('--dist', 'Enable distribution mode');
program.parse();

const DIST_MODE = program.opts().dist;
const SOURCE_MAPS = !DIST_MODE;

async function compile(src) {
  console.log(`Building ${src}`);
  return esbuild.build({
    entryPoints: [src],
    outdir: 'dist',
    outbase: src.substring(0, src.indexOf("/")),
    bundle: true,
    minify: DIST_MODE,
    sourcemap: SOURCE_MAPS,
    format: 'esm',
    plugins: [
      esbuildPluginTsc({
        force: true,
        tsconfigPath: './tsconfig.json',
      }),
    ],
  });
}

async function run() {
  const src = './src/**';
  const allNames = await glob(src, { nodir: true });
  const allBuilds = allNames.map(compile);
  await Promise.all(allBuilds);
}

if (DIST_MODE) {
  fs.rm('dist', { force: true, recursive: true })
    .then(run)
    .catch((err) => console.error(err));
} else {
  run().catch((err) => console.error(err));
}
