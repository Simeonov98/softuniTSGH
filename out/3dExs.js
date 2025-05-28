class Person {
    firstName;
    lastName;
    age;
    constructor(_firstName, _lastName, _age) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
    }
    introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} old.`;
    }
}
const person = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);
console.log(person.introduce());
console.log(person2.introduce());
export {};
//# sourceMappingURL=3dExs.js.map