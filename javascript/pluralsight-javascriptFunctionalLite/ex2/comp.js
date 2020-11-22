function sum(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function compose(fn1, fn2) {
  return function comp() {
    //   Argument Object
    console.log(arguments);

    var args = [].slice.call(arguments);
    console.log(args, "args");
    return fn2(fn1(args.shift(), args.shift()), args.shift());
  };
}

var multAndSum = compose(mult, sum);

let summed = multAndSum(3, 4, 5, 12);

console.log(summed);
