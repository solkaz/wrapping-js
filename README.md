# Wrapping

[![npm version](https://badge.fury.io/js/wrapping.svg)](https://badge.fury.io/js/wrapping)
[![Coverage Status](https://coveralls.io/repos/github/solkaz/wrapping-js/badge.svg?branch=master)](https://coveralls.io/github/solkaz/wrapping-js?branch=master)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

Library for [wrapping arithmetic](<https://en.wikipedia.com/wiki/Wrapping_(graphics)>)

## Install

NPM: `npm install wrapping`

Yarn: `yarn add wrapping`

TypeScript declaration file is included.

## Why

If you want to emulate numeric data types like a `uint8` (unsigned 8-bit integer) and perform arithmetic with wrapping semantics.

## Example

```js
/* Create a new context to operate on unsigned 8-bit numbers.
 * This means that for any math operation (add/subtract/multiply/divide),
 * the result _must_ be between the `min` and `max` (inclusive);
 * In this case, 0 - 255.
 */

const uInt8 = new Wrapping(0, 256 /* 2 ** 8 */);
console.log(uInt8.add(1, 255)); // 0
console.log(uInt8.subtract(0, 1)); // 255
console.log(uInt8.multiply(5, 52)); // 4
```

## API

### `class Wrapping`

`constructor(min: number, max: number)`

`min` and `max` must be a finite, [safe integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

Methods:

- `add(first: number, second: number): number`

- `subtract(first: number, second: number): number`

- `multiply(first: number, second: number): number`

- `divide(first: number, second: number): number`

  This is redundant, as division between two numbers will never result in overflow. Implemented only for completeness sakes.

- `wrapNumber(n: number): number`

  Wraps a number according to the `min` and `max` values set in the constructor. This can be calculated using the formula `n - (max - min) - Math.floor((n - min) / (max - min))`.

## Motivation

This project was inspired by Rust's [`Wrapping` struct](https://doc.rust-lang.org/std/num/struct.Wrapping.html) and the [`wrapping_add`](https://doc.rust-lang.org/std/primitive.u8.html#method.wrapping_add)/[`wrapping_sub`](https://doc.rust-lang.org/std/primitive.u8.html#method.wrapping_sub)/[`wrapping_mul`](https://doc.rust-lang.org/std/primitive.u8.html#method.wrapping_mul)/[`wrapping_div`](https://doc.rust-lang.org/std/primitive.u8.html#method.wrapping_div) functions.

## License

[MIT](./LICENSE.md)
