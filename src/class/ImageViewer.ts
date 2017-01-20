import {removeElement} from "../helpers/crElement";
import {byQuery, convertNodeToArray} from "../helpers/getElement";
import {insertInto} from "../helpers/insertElement";
import * as utils from "../helpers/utils";
import Image from "./Image.class";
import Options from "./ImageViewerOptions.class";

class ImageViewer {
    public static defaults: Options = {
        easing: "linear",
        onDisable: () => 0,
        onExpand: () => 0,
        onInit: () => 0,
        overlayColor: "#444",
        scrollable: true,
    };

    private elements: Image[];
    private options: Options;
    private caption: HTMLElement;
    private zoomed: boolean;
    private currentImg: number;

    constructor(query: string, options: Object | Options = {}) {
        this.elements = [];
        this.options = Object.assign({}, ImageViewer.defaults, options);
        this.zoomed = false;

        const elementsArray = convertNodeToArray(byQuery(query, true));
        elementsArray.forEach((item) => this.elements.push(new Image(item)));

        this.elements.forEach(
            (item) => {
                if (item.element.tagName === "IMG" || item.element.tagName === "img") {
                    utils.eventHandler(item.element, "click", () => this.clickHandler(item));
                }
            }
        );
        utils.eventHandler(window, "scroll", () => {
            if (this.zoomed) {
                this.zoomOut(this.elements[this.currentImg]);
            }
        });
    }

    public zoomIn(image: Image): void {
        const {tx, ty, tz} = this.calculateTranslate();
        const translate3d = `translate3d(${tx}px, ${ty}px, ${tz}px)`;
        const scale = `scale(${this.calculateScale()})`;

        utils.assignStyles(image.element, {
            position: "relative",
            transform: `${translate3d} ${scale}`,
            transitionTimingFunction: this.options.easing,
            zIndex: 666,
        });

        insertInto({
            content: `<div class="iv-overlay"><p class="iv-caption">Caption</p></div>`,
            element: false,
            parent: document.body,
            place: "f"
        });
        const overlay = byQuery("div.iv-overlay") as HTMLElement;

        utils.assignStyles(overlay, {
            backgroundColor: this.options.overlayColor,
            zIndex: 600
        });

        const attr = image.element.getAttribute("data-iv-caption");
        if (attr) {
            setTimeout(() => {
                const caption = byQuery("p.iv-caption") as HTMLElement;
                caption.innerText = attr;
                utils.assignStyles(caption, { transform: "translate3d(0,0,0)" });
            }, 50);
        }

        this.zoomed = true;
        image.zoom = !image.zoom;
    }

    public zoomOut(image: Image): void {
        utils.assignStyles(image.element, {
            position: "static",
            transform: `translate3d(0,0,0) scale(1)`,
            zIndex: 1
        });

        removeElement(byQuery("div.iv-overlay") as HTMLElement);

        this.zoomed = false;
        image.zoom = !image.zoom;
    }

    private clickHandler(el: Image): void {
        const self = el;
        this.currentImg = this.elements.indexOf(self);

        const {x, nx, y, ny} = this.elements[this.currentImg].calculateSizes();
        // if natural sizes and actual sizes are equal then its not necessary to zoom img
        if (x < nx && y < ny) {
            if (!self.zoom) {
                this.zoomIn(self);
            } else {
                this.zoomOut(self);
            }
        }
    };

    private calculateScale(): number {
        const img = this.elements[this.currentImg];

        // image natural sizes
        const { ["nx"]: imgNW, ["ny"]: imgNH } = img.calculateSizes();
        // image actual sizeX
        const { ["x"]: imgW } = img.calculateSizes();
        // viewport sizes
        const { ["x"]: viewportW, ["y"]: viewportH } = utils.documentSize() as any;

        const imgAspectRatio = imgNW / imgNH;
        const viewportAspectRatio = viewportW / viewportH;

        const imgFactor = imgNW / imgW;

        if (imgNW < viewportW && imgNH < viewportH) {
            return imgFactor;
        } else if (imgAspectRatio < viewportAspectRatio) {
            return (viewportH / imgNH) * imgFactor;
        } else {
            return (viewportW / imgNW) * imgFactor;
        }
    }

    private calculateTranslate() {
        const self = this.elements[this.currentImg].element;

        const { ["x"]: elPosX, ["y"]: elPosY } = utils.elementPosition(self) as any;
        const { ["x"]: elSizeX, ["y"]: elSizeY } = utils.elementSizes(self) as any;
        const { ["y"]: scrollPosY } = utils.scrollPosition() as any;
        const { ["x"]: docSizeX, ["y"]: docSizeY } = utils.documentSize() as any;

        // translate3d values
        const tx = (docSizeX / 2 - elSizeX / 2) - elPosX;
        const ty = scrollPosY + docSizeY / 2 - (elPosY + elSizeY / 2);
        const tz = 0;

        return {tx, ty, tz};
    }
    
    get current(): Image {
        return this.elements[this.currentImg];
    }
}

export default ImageViewer;
