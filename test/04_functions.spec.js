var expect = require('chai').expect;
var functions = require('../04_functions');

describe("range", function () {
  it("produces a range", function () {
    expect(functions.range(1, 2)).to.eql([1, 2]);
  });
  it("produces a range using a specific counter", function () {
    expect(functions.range(1, 6, 2)).to.eql([1, 3, 5]);
  });
  it("produces a range that decrements", function () {
    expect(functions.range(10, 5)).to.eql([10, 9, 8, 7, 6, 5]);
  });
});

describe("sum", function () {
  it("sums a range", function () {
    expect(functions.sum(functions.range(1, 10))).to.eql(55);
  });
});

describe("reverseArray", function () {
  it("reverses the order of an array", function () {
    expect(functions.reverseArray(["A", "B", "C"])).to.eql(["C", "B", "A"]);
  });
});

describe("reverseArrayInPlace", function () {
  it("reverses the order of an array, modifying original array", function () {
    expect(functions.reverseArrayInPlace(["A", "B", "C"])).to.eql(["C", "B", "A"]);
  });
});
