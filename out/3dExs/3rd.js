"use strict";
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        return `Driving a ${this.brand}`;
    }
}
class Car extends Vehicle {
    model;
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    drive() {
        return `${super.drive()} - Model: ${this.model}`;
    }
}
const car = new Car("Toyota", "Corolla");
console.log(car.drive());
//# sourceMappingURL=3rd.js.map