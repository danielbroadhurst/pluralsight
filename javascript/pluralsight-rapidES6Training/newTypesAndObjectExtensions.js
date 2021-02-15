/**
 * New Types and Object Extensions
 */

// Symbols
let eventSymbol = Symbol("resize event");
console.log(eventSymbol); // Symbol
console.log(eventSymbol.toString()); // Symbol('resize event')

let s = Symbol("event");
let s2 = Symbol("event");
console.log(s === s2); // false

let sFor = Symbol.for("event");
let sFor2 = Symbol.for("event");
let description = Symbol.keyFor(sFor);
console.log(sFor.toString()); // Symbol(event)
console.log(s === s2); // true
console.log(description); // event

let article = {
  title: "Whiteface Mountain",
  [Symbol.for("article")]: "My Article",
};
let value = article[Symbol.for("article")];
console.log(value); // My Article
console.log(Object.getOwnPropertyNames(article)); // ['title']
console.log(Object.getOwnPropertySymbols(article)); // [Symbol(article)]

// Well Known Symbols
let Blog = function () {};
let blog = new Blog();
console.log(blog.toString()); // [object Object]
Blog.prototype[Symbol.toStringTag] = "Blog Class";
console.log(blog.toString()); // [object Blog Class]

let values = [8, 12, 16];
console.log([].concat(values)); // [8, 12, 16]
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values)); // [ [8, 12, 16] ] - elements are not spread out
let sum = values + 100;
console.log(sum); // 8, 12, 16100
values[Symbol.toPrimitive] = function (hint) {
  console.log(hint); // default
  return 42;
};
let sum2 = values + 100;
console.log(sum2); // 142

// Object Extenstions
let a = {
  x: 1,
};
let b = {
  y: 2,
};
Object.setPrototypeOf(a, b); // prototype of object b is applied to object a
console.log(a.y); // 2
let aAssign = { a: 1 },
  bAssign = { a: 5, b: 2 },
  c = { c: 20 };
let target = {};
Object.setPrototypeOf(b, c);
Object.defineProperty(b, "c", {
  value: 10,
  enumerable: false,
});
Object.assign(target, aAssign, bAssign); // target is assigned all params of aAssign, bAssign, matching params will be overwritten
console.log(target); // { a: 5, b: 2} -- b { c: 10 } is not included as it is enumerable, c is not included in the assign call either.

let amount = NaN;
console.log(amount === amount); // false
console.log(Object.is(amount, amount)); // true
let amountZero = 0,
  total = -0;
console.log(amountZero === total); // false
console.log(Object.is(amountZero, total)); // false

// String Extensions
let title = "Santa Barbara Surf Riders";
console.log(title.startsWith("Santa")); // true
console.log(title.endsWith("Rider")); // false
console.log(title.includes("ba")); // true
let titleHex = "Surfer's \u{1f3c4} Blog";
console.log(titleHex); // Surfer's 🏄 Blog
console.log(titleHex.normalize().length); // 15 - Unicode characters are counted as 2 chars, normalize() fixes this.
let output = String.raw`${title} \u{1f3c4}\n`;
console.log(output); // "Santa Barbara Surf Riders \u{1f3c4}\n" -- String.raw() prints out without processing the chars
let surfer = "\u{1f3c4}";
console.log(surfer.repeat(10)); // 🏄🏄🏄🏄🏄🏄🏄🏄🏄🏄

// Number Extensions - Global functions are being removed.
console.log(Number.parseInt === parseInt); // true
console.log(Number.parseFloat === parseFloat); // true
let n = "NaN";
console.log(isNaN(n)); // true as isNaN transforms to number.
console.log(Number.isNaN(n)); // false -- does not transform string to number.
let iF = "8000";
console.log(isFinite(iF)); // true
console.log(Number.isFinite(iF)); // false -- does not transform string to number.
let sum = 408.2;
console.log(Number.isInteger(sum)); // false as it is a floating point number
let aPow = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(aPow)); // true;
a = Math.pow(2, 53); // unsafe number
console.log(Number.isSafeInteger(aPow)); // false;
// New Constants
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Math Extensions
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(-20)); // -1
console.log(Math.sign(20)); // 1
console.log(Math.sign(NaN)); // NaN
console.log(Math.cbrt(27)); // 3 as 3x3x3 = 27
console.log(Math.trunc(27.1)); // 27
console.log(Math.trunc(-27.9)); // -27

// RegExp Extenstions
let pattern = /\u{1f3c4}/;
console.log(pattern.test("🏄")); // false
let patternAstroPlain = /\u{1f3c4}/u;
console.log(pattern.test("🏄")); // true

// Function Extensions
let fn = function calc() {
  return 0;
};
console.log(fn.name); // calc
class Calculator {
  constructor() {}
  add() {}
}
let cCalc = new Calculator();
console.log(cCalc.name); // Calculator
console.log(c.add.name); // add
