import {byClass, byTag} from "./getElement";
import {insertInto} from "./insertElement";

const link = "<a href=\"#\">Link</a>";

describe(" static class", () => {
    let fixture: string;
    let parent;
    let insertObj;

    beforeEach(() => {
        fixture = "<div class=\"container\"> <p class=\"test\">Test</p> </div>";
        document.body.insertAdjacentHTML("afterbegin", fixture);
        parent = byClass("container");
        insertObj = {
            content: link,
            element: false,
            parent,
            place: ""
        };
    });

    afterEach(() => {
        document.body.removeChild(document.getElementsByClassName("container")[0]);
    });

    it("before: Should prepend sibling for div.container", () => {
        insertObj.place = "b";

        insertInto(insertObj);
        const inserted = byTag("a");
        expect(inserted).toBeDefined();
        expect(document.body.children[0]).toBe(inserted);
    });

    it("after: Should append sibling for div.container", () => {
        insertObj.place = "a";
        insertInto(insertObj);
        const inserted = byTag("a");
        expect(inserted).toBeDefined();
        expect(document.body.children[1]).toBe(inserted);
    });

    it("firstInside: Should prepend child for div.container", () => {
        insertObj.place = "f";
        insertInto(insertObj);
        const inserted = byTag("a");
        expect(inserted).toBeDefined();
        expect(parent.children[0]).toBe(inserted);
    });

    it("lastInside: Should append child for div.container", () => {
        insertObj.place = "l";
        insertInto(insertObj);
        const inserted = byTag("a");
        expect(inserted).toBeDefined();
        expect(parent.children[1]).toBe(inserted);
    });
});