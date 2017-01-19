import IImageViewer from "./IImageViewerOptions.interface";

class ImageViewerOptions implements IImageViewer {
    public scrollable: boolean;
    public overlayColor: string;
    public easing: string;
    public onInit: Function;
    public onDisable: Function;
    public onExpand: Function;

    constructor(args: IImageViewer) {
        this.scrollable = args.scrollable;
        this.easing = args.easing;
        this.overlayColor = args.overlayColor;
        this.onInit = args.onInit;
        this.onDisable = args.onDisable;
        this.onExpand = args.onExpand;
    }
}

export default ImageViewerOptions;