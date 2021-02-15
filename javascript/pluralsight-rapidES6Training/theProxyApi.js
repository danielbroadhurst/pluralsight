/**
 * The Proxy API
 */

//  Get by Proxy
function Employee() {
  this.name = 'Milton Waddams';
  this.salary = 0;
}
var e = new Employee();
var p = new Proxy(e, {
  get: function (target, prop, receiver) {
    return "Attempted access: " + prop;
  }
})
console.log(p.salary); // Attempted access: salary
var p2 = new Proxy(e, {
  get: function (target, prop, receiver) {
    if (prop === 'salary') return "Denied"
    return Reflect.get(target, prop, receiver);
  }
})
console.log(p2.salary); // Denied
console.log(p2.name); // Milton Waddams

// Calling Functions by Proxy
function getId() {
  return 55;
}
let p3 = new Proxy(getId, {
  apply: function (target, thisArg, argumentsList) {
    return Reflect.apply(target, thisArg, argumentsList)
  }
})
console.log(p3()); // 55

// A Proxy as a Prototype
let t = {
  tableId: 99
}
let p4 = new Proxy({}, {
  get: function (target, prop, receiver) {
    return 'Property ' + prop + ' doesn\'t exist...'
  }
})

Object.setPrototypeOf(t, p4);
console.log(t.tableId); // 99
console.log(t.size); // Property size doesn't exist...

// Revocable Proxies
let t2 = {
  tableId: 99
}
let {proxy, revoke} = Proxy.revocable(t2, {
  get: function (target, prop, receiver) {
    return Reflect.get(target, prop, receiver) + 100
  }
})
console.log(proxy.tableId); // 199
revoke()
console.log(proxy.tableId); // TypeError
