import {createElement, removeElement} from "./crElement";

describe("Tests for create/remove elements (crElements)", () => {
    it("createElement: should create new div element", () => {
        const div = createElement("div");
        div.classList.add("test-class");
        div.style.width = "800px";
        expect(div).toBeDefined();
        expect(div.classList[0]).toBe("test-class");
        expect(div.style.width).toBe("800px");
    });

    it("removeElement: should remove element from DOM", () => {
        const div = createElement("div");

        document.body.appendChild(div);
        const foundDiv = document.querySelector("div");
        expect(foundDiv).toBeDefined();
        removeElement(div);
        const notFoundDiv = document.querySelector("div");
        expect(notFoundDiv).toBeNull();
    });
});
