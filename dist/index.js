"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid Value');
        this._balance = value;
    }
    deposit(value) {
        if (value < 0)
            throw new Error('Invalid Value');
        this._balance += value;
    }
}
let account = new Account(1, 'Ibrahim', 0);
account.deposit(5000);
console.log(account.balance);
//# sourceMappingURL=index.js.map