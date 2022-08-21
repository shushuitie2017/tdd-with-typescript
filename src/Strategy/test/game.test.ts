import { Queen, Knight, AxeBehavior, SwordBehavior} from '../Game'

describe('Game Module', () => {
    test('axe()', () => {
        const queen =new Queen( new AxeBehavior())
        expect(queen.fight()).toEqual('Axe')
    })

    test('sword', () => {
        const knight = new Knight( new SwordBehavior())
        expect(knight.fight()).toEqual('Sword')
    })
})