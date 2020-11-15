const { merge } = require("./utils");
const assert = require("assert");
const { it } = require("mocha");

// eslint-disable-next-line no-undef
describe("merge", function () {
  it("prevents prototype pollution", function () {
    const malicious = JSON.parse('{"__proto__":{"injected":0}}');
    merge({}, malicious);

    const o = {};
    assert.strictEqual(o.injected, undefined);
  });
});
