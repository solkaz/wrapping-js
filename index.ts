/**
 * The default bits value to use for an operation (add/subtract/multiply).
 */
let defaultBits: number = 8;

/**
 * Gets the default bits used for an operation.
 */
export function getDefaultBits(): number {
  return defaultBits;
}

/**
 * Sets the default bits used for an operation.
 */
export function setDefaultBits(bits: number) {
  defaultBits = bits;
}

/**
 * Wraps `n` according to the number of bits are allowed.
 */
function wrapNumber(n: number, bits: number): number {
  const max = 2 ** bits;
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
 * @param bits Number of bits allowed. This will default to `defaultBits`.
 */
export function add(
  lhs: number,
  rhs: number,
  bits: number = defaultBits
): number {
  return wrapNumber(lhs + rhs, bits);
}

/**
 * Subtracts `rhs` from `lhs`, returning the wrapped version.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param bits Number of bits allowed. This will default to `defaultBits`.
 */
export function subtract(
  lhs: number,
  rhs: number,
  bits: number = defaultBits
): number {
  return wrapNumber(lhs - rhs, bits);
}

/**
 * Multiplies `lhs` by `rhs`, returning the wrapped version.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param bits Number of bits allowed. This will default to `defaultBits`.
 */
export function multiply(
  lhs: number,
  rhs: number,
  bits: number = defaultBits
): number {
  return wrapNumber(lhs * rhs, bits);
}

/**
 * Divides `lhs` with `rhs`.
 *
 * Division can never cause overflow, so there's no wrapping ever needed.
 * This is only implemented for completeness.
 *
 * @param lhs Left-hand operand of the operation.
 * @param rhs Right-hand operand of the operation.
 * @param _bits Unused and exists to make `divide` have the same signature as the other operations
 */
export function divide(
  lhs: number,
  rhs: number,
  _bits: number = defaultBits
): number {
  return lhs / rhs;
}
