/**
 * Wraps `n` according to the number of power are allowed.
 */
function wrapNumber(n: number, min: number = 0, max: number = 0): number {
  const c = max - min;
  if (n < 0) {
    return n + c;
  }
  return n - max * Math.floor((n - min) / c);
}

/**
 * Adds `lhs` to `rhs`, returning the wrapped value.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param radix Number of power allowed. This will default to `defaultPower`.
 */
export function add(lhs: number, rhs: number): number {
  return wrapNumber(lhs + rhs);
}

/**
 * Subtracts `rhs` from `lhs`, returning the wrapped version.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param radix Number of power allowed. This will default to `defaultPower`.
 */
export function subtract(lhs: number, rhs: number): number {
  return wrapNumber(lhs - rhs);
}

/**
 * Multiplies `lhs` by `rhs`, returning the wrapped version.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param power Number of power allowed. This will default to `defaultPower`.
 */
export function multiply(lhs: number, rhs: number): number {
  return wrapNumber(lhs * rhs);
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
export function divide(lhs: number, rhs: number): number {
  return lhs / rhs;
}
