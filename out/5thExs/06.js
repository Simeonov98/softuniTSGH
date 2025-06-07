var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function validateName(minLenght) {
    return function (target, propName, descriptor) {
        const originalSetter = descriptor.set;
        descriptor.set = function (val) {
            if (val.length < minLenght) {
                throw new Error(`name must have minLenght of ${minLenght}`);
            }
            return originalSetter?.call(this, val);
        };
        return descriptor;
    };
}
function validateAge(minNumber, maxNumber) {
    return function (target, propName, descriptor) {
        const originalSetter = descriptor.set;
        descriptor.set = function (val) {
            if (val < minNumber || val > maxNumber) {
                throw new Error(`Age must be between ${minNumber} and ${maxNumber}`);
            }
        };
    };
}
function validatePass(pattern) {
    return function (target, propName, descriptor) {
        const originalSetter = descriptor.set;
        descriptor.set = function (val) {
            if (!val.match(pattern)) {
                throw new Error(`password needs to match ${pattern}`);
            }
        };
    };
}
class User {
    _name;
    _age;
    _password;
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    set name(val) {
        this._name = val;
    }
    set age(val) {
        this._age = val;
    }
    set password(val) {
        this._password = val;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
__decorate([
    validateName(4),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "name", null);
__decorate([
    validateAge(1, 100),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], User.prototype, "age", null);
__decorate([
    validatePass(/^[a-zA-Z0-9!@]+$/g),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "password", null);
let user2 = new User('John', 30, '!test');
export {};
//# sourceMappingURL=06.js.map