let defaultBase = 8;

function wrapNumber(n: number, base: number): number {
  const max = 2 ** base;
  if (n < 0) {
    return max + n;
  }
  return n % max;
}

export function add(
  lhs: number = 0,
  rhs: number = 0,
  base = defaultBase
): number {
  return wrapNumber(lhs + rhs, base);
}

export function subtract(
  lhs: number = 0,
  rhs: number = 0,
  base = defaultBase
): number {
  return wrapNumber(lhs - rhs, base);
}

export function multiply(
  lhs: number = 0,
  rhs: number = 0,
  base = defaultBase
): number {
  return wrapNumber(lhs * rhs, base);
}

export function setDefaultBase(base: number = 8) {
  defaultBase = base;
}
