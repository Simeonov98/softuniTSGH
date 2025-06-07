export { }

function addCreatedAt(constructor: {new (...args:any):User}) {
    return class extends constructor{
        createdOn = new Date();
    }
}
@addCreatedAt
class User{
    _name :string
    _age: number
    
    constructor(name:string,age:number){
        this._name=name
        this._age=age
    }
   
    displayUserInfo():void{
        console.log(`${this._name}, Age:${this._age}`)
    }
}
const user1 = new User("John Doe", 30);

user1.displayUserInfo()

console.log(user1);

console.log((user1 as any).createdOn);