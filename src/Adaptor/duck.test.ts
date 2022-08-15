import { WallerDuck } from './Duck'
import { MildTurkey } from './Duck'
test('wallerduck', () => {
    const duck = new WallerDuck()
    expect(duck.quack()).toBe('ガーガー');
});

test('mildturkey', () => {
    const turkey = new MildTurkey()
    expect(turkey.gobble()).toBe('ゴロゴロ')
})
