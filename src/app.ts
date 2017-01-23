import ImageViewer from "./class/ImageViewer";
import ImageViewerOptions from "./class/ImageViewerOptions.class";

export function init(query: string, options: Object | ImageViewerOptions) {
    new ImageViewer(query, options);
}
