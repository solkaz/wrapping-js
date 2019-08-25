import { Wrapping } from "./index";

describe("Wrapping", () => {
  describe("Wrapping constructor validation", () => {
    test("can't construct a Wrapping object where min >= max", () => {
      expect(() => new Wrapping(1, 0)).toThrowError();
    });

    test("doesn't accept infinite values", () => {
      expect(() => new Wrapping(0, Number.POSITIVE_INFINITY)).toThrowError(
        /finite/
      );
      expect(() => new Wrapping(Number.NEGATIVE_INFINITY, 0)).toThrowError(
        /finite/
      );
      expect(
        () => new Wrapping(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
      ).toThrowError(/finite/);
    });

    test("doesn't accept NaN", () => {
      expect(() => new Wrapping(0, NaN)).toThrowError(/NaN/);
      expect(() => new Wrapping(NaN, 0)).toThrowError(/NaN/);
      expect(() => new Wrapping(NaN, NaN)).toThrowError(/NaN/);
    });

    test("doesn't accept floats or unsafe integers", () => {
      expect(() => new Wrapping(0, 3.4)).toThrowError(/integer/);
      expect(() => new Wrapping(1.2, 3)).toThrowError(/integer/);
      expect(() => new Wrapping(1.2, 3.4)).toThrowError(/integer/);
      expect(() => new Wrapping(0, Number.MAX_SAFE_INTEGER + 1)).toThrowError(
        /integer/
      );
      expect(() => new Wrapping(Number.MIN_SAFE_INTEGER - 1, 0)).toThrowError(
        /integer/
      );
      expect(
        () =>
          new Wrapping(Number.MIN_SAFE_INTEGER - 1, Number.MAX_SAFE_INTEGER + 1)
      ).toThrowError(/integer/);
    });
  });

  describe("mathematical methods", () => {
    const { add, subtract, multiply, divide } = new Wrapping(0, 2 ** 8);

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
        expect(multiply(52, 5)).toBe(4);
      });
    });

    describe("divide", () => {
      test("works", () => {
        expect(divide(1, 1)).toBe(1);
        expect(divide(4, 2)).toBe(2);
      });
    });
  });
});
