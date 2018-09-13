
const upperBound = 999999999;

interface BankConfig {
    bic: string;
    language: string;
    name: string;
}

class AccountNumber {
    value: number;

    constructor(public bic: string) {
        this.value = Math.floor(Math.random() * upperBound) + 1;
    }

    toString() {
        let value = this.value.toString();
        while (value.length < 9) {
            value = `0${value}`;
        }
        return `${this.bic} ${value}`
    }
}

class Customer {

    constructor(public firstName: string, public lastName: string, public preposition?: string) { }

    toString() {
        return `${this.firstName}${this.preposition ? ` ${this.preposition}` : ''} ${this.lastName}`;
    }
}

class BankAccount {

    readonly number: AccountNumber;

    constructor(public customer: Customer, bic: string) {
        this.number = new AccountNumber(bic);
     }

    toString() {
        return `[${this.number.toString()}] ${this.customer.toString()}`
    }
}

class Bank {

    private readonly accounts: BankAccount[] = [];

    constructor(private readonly config: BankConfig) { }

    public createAccount(customer: Customer){
        const account = new BankAccount(customer, this.config.bic);
        this.accounts.push(account);
        console.log(`[${this.config.name}] welcomes ${account.toString()}`);
    }
}

const bank = new Bank({ bic: 'TYPEDBANK', language: 'nl', name: 'TypeBank' });
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pit'));
bank.createAccount(new Customer('Jack', 'Sparrow'));
