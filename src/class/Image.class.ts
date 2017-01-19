interface IImage {
    element: HTMLElement;
    zoom: boolean;
}

class Image implements IImage {
    public element: HTMLImageElement;
    private zoomed: boolean;

    constructor(element: HTMLImageElement) {
        this.element = element;
        this.zoomed = false;
    }

    set zoom(expand: boolean) {
        this.zoomed = expand;
    }

    get zoom(): boolean {
        return this.zoomed;
    }

    public calculateSizes() {
        // natural sizes
        const nx = this.element.naturalWidth;
        const ny = this.element.naturalHeight;
        // actual sizes
        const x = this.element.width;
        const y = this.element.height;

        return { x, y, nx, ny };
    }
}

export default Image;
