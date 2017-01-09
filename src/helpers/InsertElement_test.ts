import InsertElement from './InsertElement';
import GetElement from './GetElement';

const link = "<a href=\"#\">Link</a>";

describe("InsertElement static class", () => {
    let fixture: string;
    let parent;

    beforeEach(() => {
        fixture = "<div class=\"container\"> <p class=\"test\">Test</p> </div>";
        document.body.insertAdjacentHTML("afterbegin", fixture);
        parent = GetElement.byClass("container");
    });

    afterEach(() => {
        document.body.removeChild(document.getElementsByClassName("container")[0]);
    });

    it("before: Should prepend sibling for div.container", () => {
        InsertElement.before(parent, link);
        const inserted = GetElement.byTag("a");
        expect(inserted).toBeDefined();
        expect(document.body.children[0]).toBe(inserted);
    });

    it("after: Should append sibling for div.container", () => {
        InsertElement.after(parent, link);
        const inserted = GetElement.byTag("a");
        expect(inserted).toBeDefined();
        expect(document.body.children[1]).toBe(inserted);
    });

    it("firstInside: Should prepend child for div.container", () => {
        InsertElement.firstInside(parent, link);
        const inserted = GetElement.byTag("a");
        expect(inserted).toBeDefined();
        expect(parent.children[0]).toBe(inserted);
    });

    it("lastInside: Should append child for div.container", () => {
        InsertElement.lastInside(parent, link);
        const inserted = GetElement.byTag("a");
        expect(inserted).toBeDefined();
        expect(parent.children[1]).toBe(inserted);
    });
});