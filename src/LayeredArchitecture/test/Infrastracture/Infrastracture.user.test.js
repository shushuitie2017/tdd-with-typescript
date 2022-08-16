"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("../../Infrastracture/UserRepository");
test('find a user who exists', () => {
    const user = new UserRepository_1.UserRepository('a11');
    expect(user.Find()).toBe(true);
});
test('find a user who does not exit', () => {
    const user = new UserRepository_1.UserRepository('a12');
    expect(user.Find()).toBe(false);
});
