import {byClass, byId, byQuery, byTag, convertNodeToArray} from "./getElement";

describe("Test for get elements functions", () => {
    let fixture: string;

    beforeEach(() => {
        fixture = `<div class=\"test-div\"> 
                        <p class=\"test-class other-class\"> Test Class </p> 
                        <p id=\"test-id\"> Test ID </p>
                    </div>`;
        document.body.insertAdjacentHTML("afterbegin", fixture);
    });

    afterEach(() => {
        document.body.removeChild(document.getElementsByClassName("test-div")[0]);
    });

    it("byId: Element should have text: 'Test ID'", () => {
        const text = "Test ID";
        const elementText = byId("test-id").innerText;
        expect(elementText).toBeDefined();
        expect(elementText).toBe(text);
    });

    it("byClass: Element should have class name: 'other-class'", () => {
        const text = "other-class";
        const elementClass = byClass("test-class").classList[1];
        expect(elementClass).toBeDefined();
        expect(elementClass).toBe(text);
    });

    it("byTag: Element should have class name: 'test-div'", () => {
        const text = "test-div";
        const elementClass = byTag("div").classList[0];
        expect(elementClass).toBeDefined();
        expect(elementClass).toBe(text);
    });

    it("byQuery (multiple): There should be a two paragraphs", () => {
        const element = convertNodeToArray(byQuery("p", true));
        const length = element.length;
        expect(element).toBeDefined();
        expect(length).toBe(2);
    });

    it("byQuery (single): There should be one div with two children", () => {
        const element = byQuery("div") as HTMLElement;
        const children = convertNodeToArray(element.children).length;
        expect(element).toBeDefined();
        expect(children).toBe(2);
    });
});