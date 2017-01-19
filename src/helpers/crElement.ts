function createElement(element: string): HTMLElement {
    return document.createElement(element);
}

function removeElement(element: HTMLElement): void {
    document.body.removeChild(element);
}

export { createElement, removeElement };
