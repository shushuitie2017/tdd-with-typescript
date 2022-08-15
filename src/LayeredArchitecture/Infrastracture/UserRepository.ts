export class UserRepository {
    UserList: string[]
    userId: string
    constructor(userId: string) {
        this.UserList = ["a11", "b22", "c33", "d44", "e55", "f66"]
        this.userId = userId
    }

    Find() {
        if (this.UserList.includes(this.userId)) {
            return true
        }
        return false
    }

}