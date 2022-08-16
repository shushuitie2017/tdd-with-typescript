"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MildTurkey = exports.WallerDuck = void 0;
class WallerDuck {
    quack() {
        return 'ガーガー';
    }
    fly() {
        return '飛んでます';
    }
}
exports.WallerDuck = WallerDuck;
class MildTurkey {
    gobble() {
        return 'ゴロゴロ';
    }
    fly() {
        return '短い距離を飛んでいます';
    }
}
exports.MildTurkey = MildTurkey;
class TurkeyAdaptor {
    constructor(turkey) {
        this.turkey = turkey;
    }
    quack() {
        return this.turkey.gobble();
    }
    fly() {
        return this.turkey.fly();
    }
}
