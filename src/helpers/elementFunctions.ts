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

export {elementPosition, elementSizes};
