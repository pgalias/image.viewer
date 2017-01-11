function byId(id: string): HTMLElement {
    return document.getElementById(id);
}

function byClass(className: string): HTMLElement {
    return document.getElementsByClassName(className)[0] as HTMLElement;
}

function byTag(tag: string): HTMLElement {
    return document.getElementsByTagName(tag)[0] as HTMLElement;
}

function byQuery(query: string, multiple: boolean = false, parent: any = document): Node {
    if (multiple) {
        return parent.querySelectorAll(query);
    } else {
        return parent.querySelector(query);
    }
}

function convertNodeToArray(nodes) {
    return Array.prototype.slice.call(nodes);
}

export {byId, byClass, byTag, byQuery, convertNodeToArray};