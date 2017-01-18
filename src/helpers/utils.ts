import {byTag} from "./getElement";

function elementPosition(element: HTMLElement): Object {
    const x = element.offsetLeft - element.scrollLeft + element.clientLeft;
    const y = element.offsetTop - element.scrollTop + element.clientTop;
    return {x, y};
}

function elementSizes(element: HTMLElement): Object {
    const x = element.offsetWidth;
    const y = element.offsetHeight;
    return {x, y};
}

function documentSize(): Object {
    const w = window;
    const e = document.documentElement;
    const g = byTag("body");
    const x = w.innerWidth || e.clientWidth || g.clientWidth;
    const y = w.innerHeight || e.clientHeight || g.clientHeight;
    return {x, y};
}

function scrollPosition(): Object {
    const w = window;
    const d = document.documentElement;
    const x = ((w.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)) || 0;
    const y = ((w.pageYOffset || d.scrollTop) - (d.clientTop || 0)) || 0;
    return {x, y};
}

function assignStyles(element: HTMLElement, styles: Object) {
    Object.assign(element.style, styles);
}

function eventHandler(el, evtType, handler) {
    if (el.addEventListener) {
        el.addEventListener(evtType, handler, false);
    } else if (el.attachEvent) {
        el.attachEvent(`on${evtType}`, handler);
    }
}

export {assignStyles, documentSize, elementPosition, elementSizes, eventHandler, scrollPosition};