/**
 * Represents a wrapping context in which wrapping operations are made.
 */
export class Wrapping {
  /**
   * The value of this.max - this.min.
   */
  private minMaxDifference: number;

  constructor(private min: number, private max: number) {
    if (Number.isNaN(min) || Number.isNaN(max)) {
      throw new Error("NaN is not an accepted value for min and max");
    }

    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      throw new Error("min and max values must be finite");
    }

    if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
      throw new Error("min and max values must be safe integers");
    }

    if (min >= max) {
      throw new Error("min value must be less than max value");
    }

    this.minMaxDifference = this.max - this.min;
  }

  /**
   * Wraps a number according to the `min` and `max` values set in the constructor.
   * This can be calculated using the following formula:
   * `n - (max - min) - Math.floor((n - min) / (max - min))`.
   * @param n The number to wrap
   */
  wrapNumber = (n: number): number => {
    if (n < 0) {
      return n + this.minMaxDifference;
    }
    return (
      n -
      this.minMaxDifference * Math.floor((n - this.min) / this.minMaxDifference)
    );
  };

  /**
   * Adds `first` to `second`, returning the wrapped value.
   *
   * @param first The first number in an addition.
   * @param second The second number in an addition.
   */
  add = (first: number, second: number): number => {
    return this.wrapNumber(first + second);
  };

  /**
   * Subtracts `second` from `first`, returning the wrapped value.
   *
   * @param first The first number in an subtraction
   * @param second The second number in an subtraction
   */
  subtract = (first: number, second: number): number => {
    return this.wrapNumber(first - second);
  };

  /**
   * Multiplies `first` by `second`, returning the wrapped value.
   *
   * @param first The first number in a multiplication.
   * @param second The second number in a multiplication.
   */
  multiply = (first: number, second: number): number => {
    return this.wrapNumber(first * second);
  };

  /**
   * Divides `first` with `second`.
   *
   * Division can not cause overflow.
   * This function is redundant, and is implemented for completeness.
   *
   * @param first The first number in a division.
   * @param second The second number in a division.
   */
  divide = (first: number, second: number): number => {
    return first / second;
  };
}
