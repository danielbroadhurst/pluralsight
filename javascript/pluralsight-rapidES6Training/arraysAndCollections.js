/**
 * Arrays and Collections
 */

// Array Extensions
let salaries = Array(90000);
console.log(salaries.length); // 90000
let salariesOf = Array.of(90000);
console.log(salariesOf.length); // 1
let amounts = [800, 810, 820];
let salariesFrom = Array.from(amounts, (v) => v + 100);
console.log(salariesFrom); // [900, 910, 920] <--- brand new array from amounts
amounts.fill(900);
console.log(amounts); // [900, 900, 900]
amounts.fill(600, 1);
console.log(amounts); // [900, 600, 600]
amounts.fill(300, 1, 2);
console.log(amounts); // [900, 300, 600]
amounts.fill(200, -1); // starts at the end of the array
console.log(amounts); // [900, 300, 200]
let result = amounts.find((value) => value >= 600);
console.log(result); // 900
let result = amounts.findIndex(function (value, index, array) {
  return value == this;
}, 300);
console.log(result); // 1 <--- index of 300 in the amounts array

let amountCopy = [600, 700, 800];
amountCopy.copyWithin(2, 0); // <--- targetIndex 2 (800) start copying from index 0 (600)
console.log(amountCopy); // [600, 700, 800]
let ids = [1, 2, 3, 4, 5];
ids.copyWithin(0, 1);
console.log(ids); // [2, 3, 4, 5, 5]

let idsEnt = ["A", "B", "C"];
console.log(...ids.entries()); // [0, "A"], [0, "B"], [0, "C"]
console.log(...ids.keys()); // 0 1 2
console.log(...ids.values()); // A B C

// Map and WeakMap
let employee1 = { name: "Jake" };
let employee2 = { name: "Janet" };

let employees = new Map();
employees.set(employee1, "ABC");
employees.set(employee2, "123");
console.log(employees.get(employee1)); // ABC
console.log(employees.size); // 2

employees.delete(employee2);
console.log(employees.size); // 1

employees.clear();
console.log(employees.size); // 0

let array = [
  [employee1, "ABC"],
  [employee2, "123"],
];
let employees2 = new Map(array); // pass in an iterable
console.log(employees2.size); // 2
console.log(employees2.has(employee2)); // true because the key exists in the map

let list = [...employees2.values()];
console.log(list); // ['ABC', '123']
list = [...employees2.entries()];
console.log(list[0][1]); // ['ABC']

// Set and WeakSet <--- guarantee unique items
let perks = new Set(); // <--- constructor can take an iterator to populate set.

perks.add("Car");
perks.add("Another String");
console.log(perks.size); // 2
perks.add("Car");
console.log(perks.size); // 2
console.log(perks.has("Car")); // true
console.log(...perks.entries()); // Car, Another String
console.log(...perks.keys()); // Car, Another String
console.log(...perks.values()); // Car, Car Another String, Another String

// Subclassing
class Perks extends Array {
  sum() {
    let total = 0;
    this.map((v) => (total += v));
    return total;
  }
}
let a = Perks.from([5, 10, 15]); // methods are inherited from Array
let newArray = a.reverse(); // methods are inherited from Array
console.log(perks.sum()); // 30 as it calls the method on Perks
console.log(newArray instanceof Perks);
