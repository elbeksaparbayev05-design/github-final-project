describe("Foiz Kalkulyatori", () => {
    it("1000 so'm 5% foiz bilan 2 yilga to‘g‘ri hisoblaydi", () => {
        expect(calculate(1000, 5, 2)).toBe(1100);
    });

    it("2000 so'm 10% foiz bilan 3 yilga to‘g‘ri hisoblaydi", () => {
        expect(calculate(2000, 10, 3)).toBe(2600);
    });
});