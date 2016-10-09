// tests/part1/cart-summary-test.js
let chai = require('chai');
var expect = chai.expect;
var CartSummary = require("./../../src/part1/cart-summary.js");

describe('CartSummary', function () {
    it('getSubtotal() should return 0 if no items are passed in', function () {
        var cartSummary = new CartSummary;
        expect(cartSummary.getSubtotal()).to.equal(0);
    });
});
