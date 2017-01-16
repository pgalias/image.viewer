import {byTag} from "./getElement";
import {assignStyles, documentSize, elementPosition, elementSizes, scrollPosition} from "./utils";
// import {insertInto} from "./insertElement";

describe("Element util functions", () => {
    let fixture: string;

    beforeEach(() => {
        fixture = `<img src="https://placekitten.com/800/700" 
                        alt="Beautiful kitten" 
                        class="some-kitten" 
                        style="width:800px"/>`;
        document.body.insertAdjacentHTML("beforeend", fixture);
    });

    afterEach(() => {
        document.body.removeChild(document.getElementsByClassName("some-kitten")[0]);
    });

    it("elementPosition: should return object with two values", () => {
        const img = byTag("img");
        const elPos = elementPosition(img);
        const count = Object.keys(elPos).length;
        expect(img).toBeDefined();
        expect(elPos).toBeDefined();
        expect(count).toBe(2);
    });

    it("elementSize: should return object with two values", () => {
        const img = byTag("img");
        const sizes = elementSizes(img);
        const count = Object.keys(sizes).length;

        expect(img).toBeDefined();
        expect(sizes).toBeDefined();
        expect(count).toBe(2);
        expect(sizes["x"]).toBe(800);
    });

    it("assignStyles: should set styles to element from given object", () => {
        const img = byTag("img");

        expect(img.style.width).toBe("800px");
        assignStyles(img, { position: "absolute" });
        expect(img.style.position).toBe("absolute");
    });
});

/*describe("Document util functions", () => {

    it("documentSize: should return object with two values", () => {
        insertInto({
            content: `<div style="height:100vh;"></div>`,
            element: false,
            parent: document.body,
            place: "f"
        });
        const obj = documentSize();
        const count = Object.keys(obj).length;
        expect(obj).toBeDefined();
        expect(count).toBe(2);
        expect(typeof count["x"]).toBe("number");
    });

    it("scrollPosition: should return object with two values", () => {
        const obj = scrollPosition();
        const count = Object.keys(obj).length;
        expect(obj).toBeDefined();
        expect(count).toBe(2);
        expect(typeof count["y"]).toBe("number");
        expect(count["x"]).toBe(0);
    });
});*/
