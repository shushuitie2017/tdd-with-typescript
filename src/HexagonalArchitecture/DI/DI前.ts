/*
class User{
    saveUser(id: number, name: string) {
        const db = new Dynamo()
        db.saveUser(id, name)
    }
}


interface DB {
    saveUser(id: number, name: string): string
}

class Dynamo implements DB{
    saveUser(id: number, name: string){
        const res = this._dynamoDbClient(id, name)
        return res
    }
    _dynamoDbClient(id: number, name: string){
        return 'Successfully Saved!!'
    }
}


const user = new User()
user.saveUser(1, 'たくろう')
*/