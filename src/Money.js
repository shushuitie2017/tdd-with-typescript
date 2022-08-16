"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.cur = currency;
    }
    times(multiplier) {
        return new Money(this.amount * multiplier, this.cur);
    }
    static dollar(amount) {
        return new Money(amount, 'USD');
    }
}
exports.Money = Money;
