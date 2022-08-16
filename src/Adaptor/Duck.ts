interface Duck {
    quack(): string;
    fly(): string;
}

export class WallerDuck implements Duck{
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

class TurkeyAdaptor implements Duck {
    turkey: Turkey
    constructor(turkey: Turkey) {
        this.turkey = turkey
    }
    quack(){
        return this.turkey.gobble()
    }

    fly(): string {
        return this.turkey.fly()
    }
}