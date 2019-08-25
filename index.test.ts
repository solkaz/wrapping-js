import { add, subtract, multiply, divide } from "./index";

describe("wrapping", () => {
  describe("add", () => {
    test("cases that don't wrap", () => {
      expect(add(0, 0)).toBe(0);
      expect(add(1, 0)).toBe(1);
      expect(add(1, 1)).toBe(2);
      expect(add(add(0, 1), 2)).toBe(3);
    });

    test("cases that do wrap", () => {
      expect(add(1, 255)).toBe(0);
      expect(add(255, 255)).toBe(254);
    });
  });

  describe("subtract", () => {
    test("cases that don't wrap", () => {
      expect(subtract(0, 0)).toBe(0);
      expect(subtract(1, 0)).toBe(1);
      expect(subtract(1, 1)).toBe(0);
    });

    test("cases that do wrap", () => {
      expect(subtract(0, 1)).toBe(255);
      expect(subtract(1, 255)).toBe(2);
    });
  });

  describe("multiply", () => {
    test("cases that don't wrap", () => {
      expect(multiply(0, 0)).toBe(0);
      expect(multiply(1, 0)).toBe(0);
      expect(multiply(1, 1)).toBe(1);
      expect(multiply(3, 2)).toBe(6);
    });

    test("cases that do wrap", () => {
      expect(multiply(128, 2)).toBe(0);
      expect(multiply(25, 12)).toBe(44);
    });
  });

  describe("divide", () => {
    test("works", () => {
      expect(divide(1, 1)).toBe(1);
      expect(divide(4, 2)).toBe(2);
    });
  });
});
