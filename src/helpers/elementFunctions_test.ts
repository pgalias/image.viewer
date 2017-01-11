import {elementPosition, elementSizes} from "./elementFunctions";
import {byTag} from "./getElement";

describe("Tests for element functions", () => {
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
});
