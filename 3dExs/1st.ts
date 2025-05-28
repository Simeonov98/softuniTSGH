import { isForInStatement } from "../node_modules/typescript/lib/typescript"

class Person {
    firstName: string
    lastName: string
    age: number

    constructor(_firstName:string,_lastName:string,_age:number) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
    }

    public introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} old.`
    }
}

const person = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);    
console.log(person.introduce());
console.log(person2.introduce());   