
const bic = 'TYPEDBANK';
const upperBound = 999999999;

interface AccountNumber {
    value: number;
    bic: string;
    toString(): string;
}

interface Customer {
    firstName: string;
    lastName: string;
    preposition?: string;
    toString: () => string;
}

interface BankAccount {
    customer: Customer;
    number: AccountNumber;
    toString(): string;
}

const createAccountNumber = (): AccountNumber => {
    const num = Math.floor(Math.random() * upperBound) + 1;
    return {
        value: num,
        bic: bic,
        toString() {
            let value = this.value.toString();
            while (value.length < 9) {
                value = `0${value}`;
            }
            return `${this.bic} ${value}`
        }
    };
};

const createCustomer = (firstName: string, lastName: string, preposition?: string): Customer => {
    return {
        firstName,
        lastName,
        preposition,
        toString() {
            return `${this.firstName}${this.preposition ? ` ${this.preposition}` : ''} ${this.lastName}`;
        }
    };
};

const createBankAccount = (customer: Customer): BankAccount => {
    return {
        customer,
        number: createAccountNumber(),
        toString(){
            return `[${this.number.toString()}] ${this.customer.toString()}`
        }
    };
};

const bankAccounts: BankAccount[] = [
    createBankAccount(createCustomer('Alfred', 'Kwak', 'Jodocus')),
    createBankAccount(createCustomer('Brad', 'Pit')),
    createBankAccount(createCustomer('Jack', 'Sparrow'))
];

bankAccounts.forEach(bankAccount => console.log(bankAccount.toString()));
