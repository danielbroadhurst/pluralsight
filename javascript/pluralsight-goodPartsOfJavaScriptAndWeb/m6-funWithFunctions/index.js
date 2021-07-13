// Function Challenge 1
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
console.log(add(3, 4)); // 7
console.log(sub(3, 4)); // -1
console.log(mul(3, 4)); // 12

function identityf(x) {
  return function () {
    return x;
  };
}
var three = identityf(3);
console.log(three()); // 3

function addf(first) {
  return function (second) {
    return first + second;
  };
}
console.log(addf(3)(4)); // 7

function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    };
  };
}
var addf = liftf(add);
console.log(addf(3)(4)); // 7
console.log(liftf(mul)(5)(6)); // 30

// Function Challenge 2
function curry(fn, arg) {
  return function (second) {
    return fn(arg, second);
  };
}
var add3 = curry(add, 3);
console.log(add3(4)); // 7
console.log(curry(mul, 5)(6)); // 30

var inc = curry(add, 1); // also possible liftf(add)(1) or addf(1)
console.log(inc(5)); // 6
console.log(inc(inc(5))); // 7

// Function Challenge 3
function twice(fn) {
  return function (a) {
    return fn(a, a);
  };
}
var doubl = twice(add);
console.log(doubl(11)); // 22
var square = twice(mul);
console.log(square(11)); // 121

function reverse(fn) {
  return function (first, second) {
    return fn(second, first);
  };
}
var bus = reverse(sub);
console.log(bus(3, 2)); // -1

function composeu(fn1, fn2) {
  return function (value) {
    return fn2(fn1(value));
  };
}
console.log(composeu(doubl, square)(5)); // 100

function composeb(fn1, fn2) {
  return function (a, b, c) {
    return fn2(fn1(a, b), c);
  };
}
console.log(composeb(add, mul)(2, 3, 7)); // 35

function limit(fn, count) {
  return function (a, b) {
    if (count >= 1) {
      count -= 1;
      return fn(a, b);
    }
    return undefined;
  };
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
  };
}
var index = from(0);
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
  };
}
var index = to(from(1), 3);
console.log(index()); // 1
console.log(index()); // 2
console.log(index()); // undefined

function fromTo(start, end) {
  return to(from(start), end);
}
var index = fromTo(0, 3);
console.log(index()); // 0
console.log(index()); // 1
console.log(index()); // 2
console.log(index()); // undefined

function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(0, array.length);
  }
  return function () {
    var index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}
var ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));
console.log(ele()); // b
console.log(ele()); // c
console.log(ele()); // undefined
var ele = element(['a', 'b', 'c', 'd']);
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
      array.push(value);
    }
    return value;
  };
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
    return recur();
  };
}
var fil = filter(fromTo(0, 5), function third(value) {
  return value % 3 === 0;
});
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
    return gen();
  };
}
function concatES6(...gens) {
  var next = element(gens),
    gen = next();
  return function recur() {
    var value = gen();
    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }
    return value;
  };
}
var con = concat(fromTo(0, 3), fromTo(0, 2));
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // 2
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // undefined
var con = concatES6(fromTo(0, 3), fromTo(0, 2));
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // 2
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // undefined

// Function Challenge 6
function gensymf(prefix) {
  var number = 0;
  return function () {
    number += 1;
    return prefix + number;
  };
}
var geng = gensymf('G'),
  genh = gensymf('F');
console.log(geng()); // "G1"
console.log(genh()); // "H1"
console.log(geng()); // "G2"
console.log(genh()); // "H2"

function gensymff(unary, seed) {
  return function (prefix) {
    var number = seed;
    return function () {
      number = unary(number);
      return prefix + number;
    };
  };
}
var gensymf = gensymff(inc, 0),
  geng = gensymf('G'),
  genh = gensymf('F');
console.log(geng()); // "G1"
console.log(genh()); // "H1"
console.log(geng()); // "G2"
console.log(genh()); // "H2"

function fibonaccif(a, b) {
  return function () {
    var next = a;
    a = b;
    b += next;
    return next;
  };
}

var fib = fibonaccif(0, 1);
console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8

// Function Challenge 7
function counter(value) {
  return {
    up: function () {
      value += 1;
      return value;
    },
    down: function () {
      value -= 1;
      return value;
    },
  };
}

var object = counter(10),
  up = object.up,
  down = object.down;
console.log(up()); // 11
console.log(down()); // 10
console.log(down()); // 9
console.log(up()); // 10

function revocable(binary) {
  return {
    invoke: function (first, second) {
      if (binary !== undefined) {
        return binary(first, second);
      }
    },
    revoke: function () {
      binary = undefined;
    },
  };
}

var rev = revocable(add),
  add_rev = rev.invoke;
console.log(add_rev(3, 4)); // 7
rev.revoke();
console.log(add_rev(5, 7)); // undefined

// Function Challenge 8
function m(value, source) {
  return {
    value: value,
    source: typeof source === 'string' ? source : String(value),
  };
}
console.log(JSON.stringify(m(1))); // {"value": 1, "source": "1"}
console.log(JSON.stringify(m(Math.PI, 'pi'))); // {"value": 3.141592653589793, "source": "pi"}

function addm(a, b) {
  return m(a.value + b.value, '(' + a.source + '+' + b.source + ')');
}
console.log(JSON.stringify(addm(m(3), m(4)))); // {"value": 7, "source": "(3+4))"}
console.log(JSON.stringify(addm(m(1), m(Math.PI, 'pi')))); // {"value": 4.141592653589793, "source": "(1+pi)"}

function liftm(binary, op) {
  return function (a, b) {
    if (typeof a === 'number') {
      a = m(a);
    }
    if (typeof b === 'number') {
      b = m(b);
    }
    return m(binary(a.value, b.value), '(' + a.source + op + b.source + ')');
  };
}

var addm = liftm(add, '+');
console.log(JSON.stringify(addm(m(3), m(4)))); // {"value": 7, "source": "(3+4))"}
console.log(JSON.stringify(liftm(mul, '*')(m(3), m(4)))); // {"value": 12, "source": "(3*4)"}
console.log(JSON.stringify(addm(3, 4))); // {"value": 7, "source": "(3+4))"}

// Function Challenge 9
function exp(value) {
  return Array.isArray(value) ? value[0](exp(value[1]), exp(value[2])) : value;
}

var sae = [mul, 5, 11];
console.log(exp(sae)); // 55
console.log(exp(42)); // 42

var nae = [Math.sqrt, [add, [square, 3], [square, 4]]];
console.log(exp(nae)); // 5

function addg(first) {
  function more(next) {
    if (next === undefined) {
      return first;
    }
    first += next;
    return more;
  }
  if (first !== undefined) {
    return more;
  }
}
console.log(addg()); // undefined
console.log(addg(2)()); // 2
console.log(addg(2)(7)()); // 9
console.log(addg(3)(0)(4)()); // 7
console.log(addg(1)(2)(4)(8)()); // 15

function liftg(binary) {
  return function (first) {
    if (first === undefined) {
      return first;
    }
    return function more(next) {
      if (next === undefined) {
        return first;
      }
      first = binary(first, next);
      return more;
    };
  };
}
console.log(liftg(mul)()); // undefined
console.log(liftg(mul)(3)()); // 3
console.log(liftg(mul)(3)(0)(4)()); // 0
console.log(liftg(mul)(1)(2)(4)(8)()); // 64

function arrayg(first) {
  var array = [];
  function more(next) {
    if (next === undefined) {
      return array;
    }
    array.push(next);
    return more;
  }
  return more(first);
}

console.log(arrayg()); // []
console.log(arrayg(3)()); // [3]
console.log(arrayg(3)(4)(5)()); // [3, 4, 5]

function continuize(unary) {
  return function (callback, arg) {
    return callback(unary(arg));
  };
}
sqrtx = continuize(Math.sqrt);
sqrtx(console.log, 81); // 9

// Building a Better Constructor

function constructor(spec) {
  let { member } = spec;
  const { other } = other_constructor(spec);
  const method = function () {
    return {
      member,
      spec,
    };
  };
  return Object.freeze({
    method,
    other,
  });
}

// Function Challenge 11

function vector() {
  var array = [];

  return {
    get: function get(i) {
      return array[i]; // to fix +i
    },
    store: function store(i, v) {
      array[i] = v; // to fix +i
    },
    append: function append(v) {
      array.push(v); // to fix array[array.length] = v
    },
  };
}

myvector = vector();
myvector.append(7);
myvector.store(1, 8);
console.log(myvector.get(0)); // 7
console.log(myvector.get(1)); // 8

// Security Exploit using this and the functions
var stash;
myvector.store('push', function () {
  stash = this;
});
myvector.append();
console.log(stash); // this is equal to the array in myvector

// Function Challenge 12

function pubsub() {
  var subscribers = [];
  return Object.freeze({
    // ATTACK 2 FIX
    subscribe: function (subscriber) {
      subscribers.push(subscriber);
    },
    publish: function (publication) {
      subscribers.forEach(function (s) {
        // ATTACK 3 FIX - USE forEach()
        setTimeout(function () {
          // ATTACK 4 - Set timeout adds all the functions to the queue
          try {
            s(publication);
          } catch (error) {}
        }, 0);
      });
    },
  });
}

my_pubsub = pubsub();
my_pubsub.subscribe(console.log);
my_pubsub.publish('it works!'); // It works!

// Security Exploit using this and the functions
my_pubsub.subscribe(); // ATTACK 1 - undefined is appended to the subscribe - will cause an issue
my_pubsub.publish('it works!'); // It works!
my_pubsub.publish = undefined; // ATTACK 2 - You can override the function
my_pubsub.publish('it works!'); // It works!
my_pubsub.subscribe(function () {
  // ATTACK 3 - Add a function to the subscribe method whis wipes the array
  this.length = 0;
});
my_pubsub.publish('it works!'); // It works!
my_pubsub.subscribe(
  limit(function () {
    // ATTACK 4 - Re-order the messages so that this message is sent first
    my_pubsub.publish('Out of Orders');
  }, 3)
);
my_pubsub.publish('it works!'); // It works!
