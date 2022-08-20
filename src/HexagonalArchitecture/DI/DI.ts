class User {
    db: DB
    constructor(db: DB){
        this.db = db
    }

	saveUser(id: number, name: string){
        this.db.saveUser(id, name)
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


const user = new User(new Dynamo())