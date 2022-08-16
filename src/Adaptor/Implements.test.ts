import { ChildClass } from "./ImplementsExtends";

test('wallerduck', () => {
    const duck = new ChildClass();
    duck.age = 22
    duck.height = 179
    duck.name = 'takanao'
    expect(duck.childMethod).toBe('childMehod');
});