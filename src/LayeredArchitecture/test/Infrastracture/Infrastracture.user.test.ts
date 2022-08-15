import { UserRepository } from '../../Infrastracture/UserRepository'

test('find a user who exists', () => {
    const user = new UserRepository('a11')
    expect(user.Find()).toBe(true);
});

test('find a user who does not exit', () => {
    const user = new UserRepository('a12')
    expect(user.Find()).toBe(false);
});