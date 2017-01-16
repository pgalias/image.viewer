import IImageViewer from "./IImageViewerOptions.interface";

class ImageViewerOptions implements IImageViewer {
    public scrollable: boolean;
    public overlayColor: string;
    public easing: string;
    public onInit: Function;
    public onDisable: Function;
    public onExpand: Function;
    public scale: number;

    constructor(args: IImageViewer) {
        this.scrollable = args.scrollable;
        this.easing = args.easing;
        this.overlayColor = args.overlayColor;
        this.onInit = args.onInit;
        this.onDisable = args.onDisable;
        this.onExpand = args.onExpand;
        this.scale = args.scale;
    }
}

export default ImageViewerOptions;