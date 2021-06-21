// Function Challenge 1
function add(a, b) {
  return a + b;
}
function sub(a,b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
console.log(add(3,4)); // 7
console.log(sub(3,4)); // -1
console.log(mul(3,4)); // 12

function identityf(x) {
  return function () {
    return x;
  }
}
var three = identityf(3)
console.log(three()); // 3

function addf(first) {
  return function (second) {
    return first + second;
  }
}
console.log(addf(3)(4)); // 7

function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second)
    }
  }
}
var addf = liftf(add);
console.log(addf(3)(4)) // 7
console.log(liftf(mul)(5)(6)); // 30

// Function Challenge 2
function curry(fn, arg) {
  return function (second) {
    return fn(arg, second);
  }
}
var add3 = curry(add, 3);
console.log(add3(4)); // 7
console.log(curry(mul, 5)(6)); // 30

var inc = curry(add, 1) // also possible liftf(add)(1) or addf(1)
console.log(inc(5)) // 6
console.log(inc(inc(5))) // 7

// Function Challenge 3
function twice(fn) {
  return function (a) {
    return fn(a, a);
  }
}
var doubl = twice(add)
console.log(doubl(11)); // 22
var square = twice(mul)
console.log(square(11)); // 121

function reverse(fn) {
  return function (first, second) {
    return fn(second, first)
  }
}
var bus = reverse(sub)
console.log(bus(3, 2)); // -1

function composeu(fn1, fn2) {
  return function (value) {
    return fn2(fn1(value))
  }
}
console.log(composeu(doubl, square)(5)); // 100

function composeb(fn1, fn2) {
  return function (a, b, c) {
    return fn2(fn1(a, b), c)
  }
}
console.log(composeb(add, mul)(2, 3, 7)); // 35

function limit(fn, count) {
  return function (a, b) {
    if (count >= 1) {
      count -= 1;
      return fn(a, b)
    }
    return undefined;
  }
}
var add_ltd = limit(add, 1);
console.log(add_ltd(3, 4)); // 7
console.log(add_ltd(3, 4)); // undefined

// Function Challenge 4
function from(start) {
  return function () {
    var next = start;
    start += 1;
    return next;
  }
}
var index = from(0)
console.log(index()); // 0
console.log(index()); // 1
console.log(index()); // 2

function to(fn, limit) {
  return function () {
    var value = fn();
    if (value < limit) {
      return value;
    }
    return undefined;
  }
}
var index = to(from(1), 3)
console.log(index()); // 1
console.log(index()); // 2
console.log(index()); // undefined

function fromTo(start, end) {
  return to(
    from(start),
    end
  )
}
var index = fromTo(0, 3)
console.log(index()); // 0
console.log(index()); // 1
console.log(index()); // 2
console.log(index()); // undefined

function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(
      0,
      array.length
    )
  }
  return function () {
    var index = gen();
    if (index !== undefined) {
      return array[index];
    }
  }
}
var ele = element([
  'a', 'b', 'c', 'd'
], fromTo(1, 3));
console.log(ele()); // b
console.log(ele()); // c
console.log(ele()); // undefined
var ele = element([
  'a', 'b', 'c', 'd'
]);
console.log(ele()); // a
console.log(ele()); // b
console.log(ele()); // c
console.log(ele()); // d
console.log(ele()); // undefined

// Function Challenge 5
function collect(gen, array) {
  return function () {
    var value = gen();
    if (value !== undefined) {
      array.push(value)
    }
    return value;
  }
}
var array = [];
var col = collect(fromTo(0, 2), array);
console.log(col()); // 0
console.log(col()); // 1
console.log(col()); // undefined
console.log(array); // [0, 1]

function filter(gen, fn) {
  return function recur() {
    var value = gen();
    if (value === undefined || fn(value)) {
      return value;
    }
    return recur()
  } 
}
var fil = filter(fromTo(0, 5), function third(value) {
  return (value % 3) === 0;
})
console.log(fil()); // 0
console.log(fil()); // 3
console.log(fil()); // undefined

function concat(gen1, gen2) {
  var gen = gen1;
  return function () {
    var value = gen();
    if (value !== undefined) {
      return value;
    }
    gen = gen2;
    return gen()
  }
}
function concatES6(...gens) {
  var next = element(gens), gen = next()
  return function recur() {
    var value = gen();
    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }
    return value;
  }
}
var con = concat(fromTo(0, 3), fromTo(0, 2))
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // 2
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // undefined
var con = concatES6(fromTo(0, 3), fromTo(0, 2))
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // 2
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // undefined

// Function Challenge 6
function gensymf(prefix) {
  var number = 0
  return function () {
    number += 1;
    return prefix + number;
  }
}
var geng = gensymf("G"), genh = gensymf("F");
geng() // "G1"
genh() // "H1"
geng() // "G2"
genh() // "H2"