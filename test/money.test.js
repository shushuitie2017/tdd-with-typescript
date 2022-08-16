"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Money_1 = require("../src/Money");
describe('Money module', () => {
    test('times()', () => {
        const five = Money_1.Money.dollar(5);
        expect(five.times(2)).toEqual(Money_1.Money.dollar(10));
    });
});
