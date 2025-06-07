"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function log(target, methodName, descriptor) {
    const orginalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Function '${methodName}' called with arguments: ${args.join(', ')}`);
        return orginalMethod(args);
    };
}
class Person {
    fName;
    lName;
    constructor(_fName, _lName) {
        (this.fName = _fName), (this.lName = _lName);
    }
    static getFullname(fName, lName) {
        return fName + lName;
    }
}
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], Person, "getFullname", null);
let person = new Person("John", "Does");
Person.getFullname(person.fName, person.lName);
Person.getFullname("Benny", 'Tres');
//# sourceMappingURL=01.js.map