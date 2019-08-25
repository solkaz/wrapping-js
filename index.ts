export class Wrapping {
  private minMaxDifference: number;
  constructor(private min: number, private max: number) {
    this.minMaxDifference = this.max - this.min;
  }

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
