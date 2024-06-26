/**
 * Copyright 2024 Christian Lista Nicoloso. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Map JSX/React event names to their standard DOM counterpart.
const eventsMap = {
    onAbort: 'abort',
    onAnimationCancel: 'animationcancel',
    onAnimationEnd: 'animationend',
    onAnimationIteration: 'animationiteration',
    onAuxClick: 'auxclick',
    onBlur: 'blur',
    onChange: 'change',
    onClick: 'click',
    onClose: 'close',
    onContextMenu: 'contextmenu',
    onDoubleClick: 'dblclick',
    onError: 'error',
    onFocus: 'focus',
    onGotPointerCapture: 'gotpointercapture',
    onInput: 'input',
    onKeyDown: 'keydown',
    onKeyPress: 'keypress',
    onKeyUp: 'keyup',
    onLoad: 'load',
    onLoadEnd: 'loadend',
    onLoadStart: 'loadstart',
    onLostPointerCapture: 'lostpointercapture',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onPointerCancel: 'pointercancel',
    onPointerDown: 'pointerdown',
    onPointerEnter: 'pointerenter',
    onPointerLeave: 'pointerleave',
    onPointerMove: 'pointermove',
    onPointerOut: 'pointerout',
    onPointerOver: 'pointerover',
    onPointerUp: 'pointerup',
    onReset: 'reset',
    onResize: 'resize',
    onScroll: 'scroll',
    onSelect: 'select',
    onSelectionChange: 'selectionchange',
    onSelectStart: 'selectstart',
    onSubmit: 'submit',
    onTouchCancel: 'touchcancel',
    onTouchMove: 'touchmove',
    onTouchStart: 'touchstart',
    onTransitionCancel: 'transitioncancel',
    onTransitionEnd: 'transitionend',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragEnter: 'dragenter',
    onDragExit: 'dragexit',
    onDragLeave: 'dragleave',
    onDragOver: 'dragover',
    onDragStart: 'dragstart',
    onDrop: 'drop',
    onFocusOut: 'focusout',
};

export function getNativeEventName(reactEventName) {
    return eventsMap[reactEventName];
}
