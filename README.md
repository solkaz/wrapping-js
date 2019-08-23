# Wrapping

[![npm version](https://badge.fury.io/js/wrapping.svg)](https://badge.fury.io/js/wrapping)

Library for [wrapping arithmetic](<https://en.wikipedia.com/wiki/Wrapping_(graphics)>)

## Install

NPM: `npm install --save-dev wrapping`

Yarn: `yarn add wrapping`

## API

### Mathematical operators

All functions here implement the same interface:

`function(lhs: number, rhs: number, power?: number): number`, where:

`lhs` - Left-hand operand of the operation

`rhs` - Right-hand operand of the operation

`power` - What is the integer power? Defaults to `defaultPower`, which defaults to `8`.

#### `add(lhs: number, rhs: number, power?: number): number`

#### `subtract(lhs: number, rhs: number, power?: number): number`

#### `multiply(lhs: number, rhs: number, power?: number): number`

#### `divide(lhs: number, rhs: number, power?: number): number`

This is redundant, as division between two numbers will never result in overflow. Implemented only for completeness sakes.

### Utils

#### `getDefaultPower(): number`

Gets the default `power` value used when using an operator

#### `setDefaultPower(power: number): void`

Sets the default `power` value used when using an operator.

## License

[MIT](./LICENSE.md)
