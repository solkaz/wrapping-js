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
export function setDefaultBits(bits: number = 8) {
  defaultBits = bits;
}

/**
 * Wraps `n` according to the number of bits are allowed.
 */
function wrapNumber(n: number, bits: number): number {
  const max = 2 ** bits;
  if (n < 0) {
    return max + n;
  }
  return n % max;
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
