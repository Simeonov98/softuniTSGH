"use strict";
class bankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new bankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());
const account2 = new bankAccount(20);
account2.withdraw(30);
console.log(account2.getBalance());
//# sourceMappingURL=2nd.js.map