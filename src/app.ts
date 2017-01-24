import ImageViewer from "./class/ImageViewer";
import ImageViewerOptions from "./class/ImageViewerOptions.class";
import {eventHandler} from "./helpers/utils";

let iv;
let initialScrollPos = -1;
let initialTouchPos = -1;

export function init(query: string, options: Object | ImageViewerOptions) {
    iv = new ImageViewer(query, options);

    eventHandler(window, "scroll", scrollHandler);
    eventHandler(window, "touchstart", touchStartHandler);
    eventHandler(window, "keyup", keyupHandler);
}

export function closeCurrent() {
    iv.closeCurrent();
}

function scrollHandler() {
    if (initialScrollPos === -1) {
        initialScrollPos = window.pageYOffset;
    }

    if (Math.abs(initialScrollPos - window.pageYOffset) >= 40) {
        closeCurrent();
    }
}

function touchStartHandler(e) {
    const t = e.touches[0];
    if (t == null) {
        return;
    }

    initialTouchPos = t.pageY;
    eventHandler(e.target, "touchmove", touchMoveHandler);
}

function touchMoveHandler(e) {
    const t = e.touches[0];
    if (t == null) {
        return;
    }

    if (Math.abs(t.pageY - initialTouchPos) > 10) {
        closeCurrent();
        e.target.removeEventListener("touchmove", touchMoveHandler);
    }
}

function clickHandler() {
    closeCurrent();
}

function keyupHandler(e) {
    // esc, up, down
    const closeKeys = [27, 38, 40];
    const c = e.which || e.keyCode;
    if (closeKeys.indexOf(c) > -1) {
        closeCurrent();
    }
}
