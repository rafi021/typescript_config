/*Classes */

class Account {
    nickname?:string;

    constructor(
        public readonly id:number,
        public owner: string,        
        private _balance: number
    ){}

    // getters & setters
    get balance() :number{
        return this._balance;
    }

    set balance(value:number){
        if(value<0)
            throw new Error('Invalid Value');
        this._balance = value;
    }

    deposit(value: number){
        if(value<0)
            throw new Error('Invalid Value');
        this._balance += value;
    }

}

let account = new Account(1, 'Ibrahim', 0);
account.deposit(5000);
console.log(account.balance)