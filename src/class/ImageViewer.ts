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
        scale: 1.2,
        scrollable: true,
    };

    private elements: Image[];
    private options: Options;
    private overlay: HTMLElement;
    private caption: HTMLElement;
    private zoomed: boolean;
    private current: number;

    constructor(query: string, options: Object | Options = {}) {
        this.elements = [];
        this.options = Object.assign({}, ImageViewer.defaults, options);
        this.zoomed = false;

        insertInto({
            content: `<div class="iv-overlay"><p class="iv-caption"></p></div>`,
            element: false,
            parent: document.body,
            place: "f"
        });
        this.overlay = byQuery("div.iv-overlay") as HTMLElement;
        this.caption = byQuery("p.iv-caption") as HTMLElement;

        const elementsArray = convertNodeToArray(byQuery(query, true));
        elementsArray.forEach((item) => this.elements.push(new Image(item)));

        this.elements.forEach(
            (item) => {
                utils.eventHandler(item.element, "click", () => this.clickHandler(item));
                utils.assignStyles(item.element, { transitionTimingFunction: this.options.easing });
            }
        );
        utils.eventHandler(window, "scroll", () => {
            if (this.zoomed) {
                this.zoomOut(this.elements[this.current]);
            }
        });
    }

    private clickHandler(el: Image): void {
        const self = el;
        this.current = this.elements.indexOf(self);

        if (!self.zoom) {
            this.zoomIn(self);
        } else {
            this.zoomOut(self);
        }
    };

    private zoom(willExpand: boolean): void {
        if (willExpand) {
            utils.assignStyles(this.overlay, {
                display: "block",
                zIndex: 665
            });
            this.zoomed = true;
        } else {
            utils.assignStyles(this.overlay, {
                display: "none",
                zIndex: 0
            });
            this.zoomed = false;
        }
    }

    private zoomIn(image: Image): void {
        const elPositions = utils.elementPosition(image.element);
        const elSizes = utils.elementSizes(image.element);
        const scrollPosition = utils.scrollPosition()["y"];
        const docSizes = utils.documentSize();

        // translate3d values
        const tx = (docSizes["x"] / 2 - elSizes["x"] / 2) - elPositions["x"];
        const ty = scrollPosition + docSizes["y"] / 2 - (elPositions["y"] + elSizes["y"] / 2);
        const tz = 0;

        const translate3d = `translate3d(${tx}px, ${ty}px, ${tz}px)`;
        const scale = `scale(${this.options.scale})`;

        utils.assignStyles(image.element, {
            position: "relative",
            transform: `${translate3d} ${scale}`,
            zIndex: 666
        });

        // set overlay div as visible
        this.zoom(true);

        const attr = image.element.getAttribute("data-iv-caption");
        if (attr) {
            this.caption.innerText = attr;
            utils.assignStyles(this.caption, {
                opacity: 1,
                transform: "translate3d(0,0,0)"
            });
        }

        image.zoom = !image.zoom;
    }

    private zoomOut(image: Image): void {
        utils.assignStyles(image.element, {
            position: "static",
            transform: "translate3d(0,0,0) scale(1)"
        });

        // set overlay div as hidden
        this.zoom(false);

        this.caption.innerText = "";
        utils.assignStyles(this.caption, {
            opacity: 0,
            transform: "translate3d(0,1000%,0)"
        });

        image.zoom = !image.zoom;
    }
}

export default ImageViewer;
