"use strict";
function createCar(carBody, tires, engine) {
}
createCar({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName; } }, { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() { return this.partName; } }, { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() { return this.partName; } });
function httpCodes(httpCode) {
    switch (httpCode.code) {
        case 200:
        case 201:
        case 301:
            console.log(httpCode.text);
            return;
        case 400:
        case 404:
        case 500: console.log(httpCode.text.slice(0, httpCode.printChars));
    }
}
httpCodes({ code: 200, text: 'OK' });
httpCodes({ code: 201, text: 'Created' });
httpCodes({ code: 301, text: 'Not Found' });
httpCodes({ code: 400, text: 'Bad Request', printChars: 4 });
httpCodes({ code: 404, text: 'Not Found', printChars: 3 });
httpCodes({ code: 500, text: 'Internal Server Error', printChars: 1 });
function visitFloor(floor) {
    switch (floor.number) {
        case 1:
            floor.train();
            return;
        case 2:
            floor.dine();
            return;
        case 3:
            floor.sleep();
            return;
    }
}
visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep() { }, number: 3, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'C' });
let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}`; } };
let locationn = {
    city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city}
${this.postalCode}`;
    }
};
function createCombinedFunction(names, locationn) {
    return function (combinedObject) {
        console.log(`Hello ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    };
}
let combinedFunction = createCombinedFunction(names, locationn);
let combinedPerson = Object.assign({}, names, locationn);
combinedFunction(combinedPerson);
function isUser(user) {
    return user != undefined && typeof user === 'object' &&
        'id' in user && ((typeof user.id === 'number' && user.id > 100) || (typeof user.id === 'string' && user.id.length === 14)) &&
        'username' in user && (typeof user.username === 'string' && (user.username.length > 4 && user.username.length < 11)) &&
        'passwordHash' in user && ((typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
        (Array.isArray(user.passwordHash) && user.passwordHash.length === 4 && user.passwordHash.every(x => typeof x === 'string' && x.length === 8))) &&
        'status' in user && typeof user.status === 'string' && ['Locked', 'Unlocked'].includes(user.status);
}
let user = { id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' };
let user2 = { id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' };
console.log(isUser(user));
console.log(isUser(user2));
function assignTask(user, task) {
}
class CustomerOrder {
    dishName;
    price;
    isVegan;
    orderId;
    quantity;
    orderStatus = "Pending";
    constructor(dishName, price, isVegan, orderId, quantity) {
        this.dishName = dishName;
        this.price = price;
        this.isVegan = isVegan;
        this.orderId = orderId;
        this.quantity = quantity;
    }
    getDishInfo() {
        return `${this.dishName} - Price: $${this.price}, Vegan: ${this.isVegan ?
            'Yes' : 'No'}`;
    }
    getOrderSummary() {
        return `Order ID: ${this.orderId} - Dish: ${this.dishName}, Quantity:
            ${this.quantity}, Total Price: $${this.price * this.quantity}, Status:
            ${this.orderStatus}`;
    }
    updateOrderStatus() {
        if (this.orderStatus === "Pending") {
            this.orderStatus = "Shipped";
        }
        else if (this.orderStatus === "Shipped") {
            this.orderStatus = "Delivered";
        }
    }
    getOrderStatus() {
        return `Order Status: ${this.orderStatus}`;
    }
}
let order = {
    dishName: 'Cheese Burger',
    price: 12,
    isVegan: false,
    orderId: 101,
    quantity: 2,
    discount: 10,
    deliveryAddress: '456 Burger Lane, Food City',
    orderStatus: 'Pending',
    getDishInfo() {
        return `${this.dishName} - Price: $${this.price}, Vegan: ${this.isVegan ?
            'Yes' : 'No'}`;
    },
    getOrderSummary() {
        return `Order ID: ${this.orderId} - Dish: ${this.dishName}, Quantity:
${this.quantity}, Total Price: $${this.price * this.quantity}`;
    },
    updateOrderStatus() {
        if (this.orderStatus === "Pending") {
            this.orderStatus = "Shipped";
        }
        else if (this.orderStatus === "Shipped") {
            this.orderStatus = "Delivered";
        }
    },
    getOrderStatus() {
        return `Order Status: ${this.orderStatus}`;
    },
    getFinalPrice() {
        const totalPrice = this.price * this.quantity;
        const finalPrice = totalPrice - (totalPrice * (this.discount / 100));
        return `Final Price after ${this.discount}% discount: $${finalPrice}`;
    }
};
console.log(order.getDishInfo());
console.log(order.getOrderSummary());
console.log(order.getFinalPrice());
console.log(order.getOrderStatus());
order.updateOrderStatus();
console.log(order.getOrderStatus());
//# sourceMappingURL=2ndExs.js.map