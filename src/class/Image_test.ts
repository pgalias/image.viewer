import {byId, byTag} from "../helpers/getElement";
import Image from "./Image.class";

const fixture = `<div id="test" style="width:500px;height:500px;">
                    <img src="https://placekitten.com/800/700" 
                        alt="Beautiful kitten" 
                        class="some-kitten" 
                        style="width:100%;height:auto;display:block;"/>
                </div>`;

describe("Tests for Image class", () => {
    let div;
    let img;
    let image;

    beforeEach(() => {
        document.body.insertAdjacentHTML("beforeend", fixture);
        div = byId("test");
        img = byTag("img");
        image = new Image(img);
    });

    afterEach(() => {
        document.body.removeChild(byId("test"));
    });

    it("Image class should be initialised", () => {
        expect(image).toBeDefined();
        expect(image instanceof Image).toBeTruthy();
    });

    it("Image zoomed property initialised as false and can be set by zoom setter", () => {
        expect(image.zoom).toBeFalsy();
        expect(image.zoom = true).toBeTruthy();
    });

    it("Image calculateSizes should return four values", () => {
        const returnValue = Object.keys(image.calculateSizes()).length;
        expect(returnValue).toBeDefined();
        expect(returnValue).toBe(4);
    });

    it("Image should have different values of width and naturalWidth", () => {
        const returnValue = image.calculateSizes();
        expect(returnValue.x === returnValue.nx).toBeFalsy();
    });
});
