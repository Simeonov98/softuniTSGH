class bankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    public deposit(amount: number): void {
        this.balance += amount;

    }
    public withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
    public getBalance(): number {
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