import { add } from "./index";

describe("wrapping", () => {
  describe("add", () => {
    test("handles cases that don't wrap", () => {
      expect(add(0, 0)).toBe(0);
      expect(add(0, 1)).toBe(1);
      expect(add(add(0, 1), 2)).toBe(3);
    });

    test("handles cases that do wrap", () => {
      expect(add(1, 255)).toBe(0);
    });
  });
});
