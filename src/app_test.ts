describe("Test of tests", () => {
    let counter: number;

    beforeEach(() => {
        counter = 0;
    });

    afterEach(() => {
        console.log("Test has been ended");
    });

    it("Should been equal 0", () => {
        expect(counter).toBe(0);
    });

    it("Should been equal 6", () => {
        counter = 2 + 2 * 2;
        expect(counter).toBe(6);
        expect(counter).not.toBe(8);
    });
});
