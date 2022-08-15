class Duck {
    quack() {}
    fly() {}
}

export class WallerDuck extends Duck{
    quack() {
        return 'ガーガー'
    }

    fly() {
        return '飛んでます'
    }
}

interface Turkey {
    gobble(): string;
    fly(): string;
}

export class MildTurkey implements Turkey {
    gobble(){
        return 'ゴロゴロ'
    }
    fly(){
        return '短い距離を飛んでいます'
    }
}