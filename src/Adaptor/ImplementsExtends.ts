class ParentClass {
    age: number
    name: string

    parentMethod() {
        console.log('parent method was called')
    }

    sampleMethod() {
        console.log('parent sample method was called')
    }
}

export class ChildClass extends ParentClass {
    height: number

    childMethod() {
        console.log('child method was called')
        return 'childMehod'
    }
    sampleMethod() {
        console.log('child sample method was called')
        return 'childSampleMethod'
    }
}