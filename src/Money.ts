export class Money {
    protected amount: number
    protected cur: string

    constructor(amount: number, currency: string) {
        this.amount = amount
        this.cur = currency
    }

    times(multiplier: number): Money {
        return new Money(this.amount * multiplier, this.cur)
    }

    static dollar(amount: number): Money {
        return new Money(amount, 'USD')
    }
}