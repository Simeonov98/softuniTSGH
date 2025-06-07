function log(target:any, methodName:string , descriptor: PropertyDescriptor){
    const orginalMethod = descriptor.value
    descriptor.value = function(...args:any[]){
        console.log(`Function '${methodName}' called with arguments: ${args.join(', ')}`);
        return orginalMethod(args)
    }
}


class Person {

  public fName: string;
  public lName: string;

  constructor(_fName: string, _lName: string) {
    (this.fName = _fName), (this.lName = _lName);
  }
  @log
  static getFullname(fName: string, lName: string): string {
    return fName + lName;
  }
 
}
let person = new Person("John", "Does");
Person.getFullname(person.fName, person.lName);
Person.getFullname("Benny",'Tres');
