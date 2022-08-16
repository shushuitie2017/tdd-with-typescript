## Implements と extendsの違い：

継承にはクラスを宣言した後にextendsを使う
```typescript

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

class ChildClass extends ParentClass {
    height: number

    childMethod() {
        console.log('child method was called')
    }
    sampleMethod() {
        console.log('child sample method was called')
    }
}
```

