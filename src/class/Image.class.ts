interface IImage {
    element: HTMLElement;
    zoom: boolean;
}

class Image implements IImage {
    public element: HTMLElement;
    private zoomed: boolean;

    constructor(element: HTMLElement) {
        this.element = element;
        this.zoomed = false;
    }

    set zoom(expand: boolean) {
        this.zoomed = expand;
    }

    get zoom(): boolean {
        return this.zoomed;
    }
}

export default Image;
