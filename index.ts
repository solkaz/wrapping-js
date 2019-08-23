/**
 * The default power value to use for an operation (add/subtract/multiply).
 */
let defaultPower: number = 8;

/**
 * Gets the default power used for an operation.
 */
export function getDefaultPower(): number {
  return defaultPower;
}

/**
 * Sets the default power used for an operation.
 */
export function setDefaultPower(power: number) {
  defaultPower = power;
}

/**
 * Wraps `n` according to the number of power are allowed.
 */
function wrapNumber(n: number, radix: number): number {
  const max = 2 ** radix;
  if (n < 0) {
    return n + max;
  }
  return n - max * Math.floor(n / max);
}

/**
 * Adds `lhs` to `rhs`, returning the wrapped value.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param radix Number of power allowed. This will default to `defaultPower`.
 */
export function add(
  lhs: number,
  rhs: number,
  radix: number = defaultPower
): number {
  return wrapNumber(lhs + rhs, radix);
}

/**
 * Subtracts `rhs` from `lhs`, returning the wrapped version.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param radix Number of power allowed. This will default to `defaultPower`.
 */
export function subtract(
  lhs: number,
  rhs: number,
  radix: number = defaultPower
): number {
  return wrapNumber(lhs - rhs, radix);
}

/**
 * Multiplies `lhs` by `rhs`, returning the wrapped version.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param power Number of power allowed. This will default to `defaultPower`.
 */
export function multiply(
  lhs: number,
  rhs: number,
  power: number = defaultPower
): number {
  return wrapNumber(lhs * rhs, power);
}

/**
 * Divides `lhs` with `rhs`.
 *
 * Division can never cause overflow, so there's no wrapping ever needed.
 * This is only implemented for completeness.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param _power Unused and exists to make `divide` have the same signature as the other operations
 */
export function divide(
  lhs: number,
  rhs: number,
  _power: number = defaultPower
): number {
  return lhs / rhs;
}
