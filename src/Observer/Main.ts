//Weather Station
interface Subject {
    registerObserver(o: Observer):string
    removeObserver(o: Observer): string
    notifyObservers(): string
}

interface Observer {
    update(temp: number, humidity: number, pressure: number): string
}

interface DisplayElement {
    display(): void
}




/*
WeatherDataでSubjectインターフェイスを実装する
*/
export class WeatherData implements Subject {
    observers: Observer[]
    temp: number
    humidity: number
    pressure: number

    constructor(temp: number, humidity: number, pressure: number) {
        this.temp = temp
        this.humidity = humidity
        this.pressure = pressure
        const obserber1: Observer = new ConcreteObserver(32, 1)
        const observer2: Observer = new ConcreteObserver(22, 10)
        this.observers = [obserber1, observer2]
    }
    registerObserver(o: Observer){
        this.observers.push(o)
        return ''
    }

    removeObserver(o: Observer){
        const indexOfSubjectObserver = this.observers.indexOf(o);
        this.observers.slice(indexOfSubjectObserver, 1)
        return ''
    }

    notifyObservers(){
        for (let observer of this.observers ) {
            observer.update(this.temp, this.humidity, this.pressure)
        }
        return `${this.observers}`
    }

    mesurementsChanged(){
        return this.notifyObservers()
    }

    setMessurements(temp: number, humidity: number, pressure: number) {
        this.temp = temp
        this.humidity = humidity
        this.pressure = pressure
        return this.mesurementsChanged()
    }
}





export class CurrentConditionsDisplay implements Observer, DisplayElement {
    temp: number
    humidity: number
    pressure: number
    weatherData: WeatherData
    constructor(weatherData: WeatherData){
        this.weatherData = weatherData
        this.temp = weatherData.temp
        this.humidity = weatherData.humidity
        this.pressure = weatherData.pressure
    }

    update(temp: number, humidity: number) {
        this.temp = temp
        this.humidity = humidity
        return this.display()
    }

    display(){
        console.log(`${this.temp}, ${this.humidity}`)
        return(`気温: ${this.temp}, 湿度: ${this.humidity}`)
    }
}


//これね


class ConcreteObserver {
    temp: number
    humidity: number
    constructor(temp: number, humidity: number){
        this.temp = temp
        this.humidity = humidity
    }
    update(temp: number, humidity: number) {
        this.temp = temp
        this.humidity = humidity
        return this.display()
    }
    display(){
        console.log(`${this.temp}, ${this.humidity}`)
        return(`気温: ${this.temp}, 湿度: ${this.humidity}`)
    }
}
