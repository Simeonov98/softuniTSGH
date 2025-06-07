export { }
function validateName(minLenght:number){
    return function(target:any,propName:string,descriptor:PropertyDescriptor){
        const originalSetter = descriptor.set
        descriptor.set  = function (val:string){
            if (val.length < minLenght){
                throw new Error(`name must have minLenght of ${minLenght}`)
            }
            return originalSetter?.call(this, val)
        }
        return descriptor
    }

}
function validateAge(minNumber:number,maxNumber:number){
    return function(target:any,propName:string,descriptor:PropertyDescriptor){
        const originalSetter = descriptor.set
        descriptor.set = function(val:number){
            if(val< minNumber|| val>maxNumber){
                throw new Error(`Age must be between ${minNumber} and ${maxNumber}`)
            }
        }
    }

}
function validatePass(pattern:RegExp){
    return function(target:any,propName:string,descriptor:PropertyDescriptor){
        const originalSetter = descriptor.set
        
        descriptor.set = function(val:string){
            if(!val.match(pattern)){
                throw new Error(`password needs to match ${pattern}`)
            }
        }
    }

}


class User {
  private _name!: string;
  private _age!: number;
  private _password!: string;
  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }
  @validateName(4)
  set name(val: string) {
    this._name = val;
  }
  @validateAge(1,100)
  set age(val: number) {
    this._age = val;
  }
  @validatePass(/^[a-zA-Z0-9!@]+$/g)
  set password(val: string) {
    this._password = val;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
}



let user2 = new User('John', 30, '!test');

