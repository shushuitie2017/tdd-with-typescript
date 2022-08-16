"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor(userId) {
        this.UserList = ["a11", "b22", "c33", "d44", "e55", "f66"];
        this.userId = userId;
    }
    Find() {
        if (this.UserList.includes(this.userId)) {
            return true;
        }
        return false;
    }
}
exports.UserRepository = UserRepository;
