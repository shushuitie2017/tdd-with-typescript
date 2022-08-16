"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = require("./Duck");
const Duck_2 = require("./Duck");
test('wallerduck', () => {
    const duck = new Duck_1.WallerDuck();
    expect(duck.quack()).toBe('ガーガー');
});
test('mildturkey', () => {
    const turkey = new Duck_2.MildTurkey();
    expect(turkey.gobble()).toBe('ゴロゴロ');
});
