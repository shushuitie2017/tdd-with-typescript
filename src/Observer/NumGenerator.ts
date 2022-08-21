import { count } from "console";

interface Observer {
    update(generator: NumGenerator): void
}


//抽象クラスにもかかわらず実装を記述しているが, getNumberとexecureをoverrideさせたいがために抽象クラスにしている
abstract class NumGenerator {
    observers: Observer[] = []
    addObaserver(observer: Observer){
        this.observers.push(observer)
    }

    deleteObserver(observer: Observer){
        const indexOfSubjectObserver = this.observers.indexOf(observer);
        this.observers.slice(indexOfSubjectObserver, 1)
    }

    notifyObservers(){
        let res: any[] = []
        for (let observer of this.observers){
            res.push(observer.update(this))
        }
        return res
    }

    abstract getNumber(): number
    abstract execute(): void
}

export class DigitalObserver implements Observer {
    update(generator: NumGenerator){
        console.log(`${generator.getNumber()}`)
        return`${generator.getNumber()}`
    }
}

export class GraphObserver implements Observer {
    update(generator: NumGenerator){
        let grapgh: string = '*'
        for (var i = 0; i < generator.getNumber(); i++){
            grapgh += '*'
        }
        return grapgh
    }
}

//ConcreteSubject

export class RandomNumberGenerator extends NumGenerator {
    min: number = 5
    max: number = 20
    random: number
    number: number
    constructor() {
        super()
        this.number = 10
        this.random = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
    }

    getNumber(){
        return this.number
    }

    execute(){
        this.number += 20;
        return this.notifyObservers();
    }
}

