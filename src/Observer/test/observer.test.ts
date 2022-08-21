import { WeatherData, CurrentConditionsDisplay } from '../Main'
import { RandomNumberGenerator, DigitalObserver, GraphObserver } from '../NumGenerator'
describe('Observer', () => {
    test('test1', () => {
        const weatherData = new WeatherData(20, 10, 100)
        const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)
        expect(currentConditionsDisplay.update(1, 2)).toEqual('気温: 1, 湿度: 2')
    })
    /*
    test('test2', () => {
        const weatherData = new WeatherData(20, 10, 100)
        const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)
        expect(weatherData.setMessurements(1, 2, 4)).toEqual('あ')
    })
    */
})



/*
ランダムな数字を発生させる
*/

describe('NumGenerator', () => {
    test('test1', () => {
        const subject = new RandomNumberGenerator()
        subject.addObaserver(new DigitalObserver())
        subject.addObaserver(new GraphObserver())
        expect(subject.execute()).toEqual(["30", "*******************************"])
        expect(subject.execute()).toEqual(["50", "***************************************************"])
    })
})
