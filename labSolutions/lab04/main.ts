
const bic = 'TYPEDBANK';
const upperBound = 999999999;
const createAccountNumber = () => {
    const num = Math.floor(Math.random() * upperBound) + 1;
    return {
        number: num,
        bic: bic,
        toString() {
            let account = this.number.toString();
            while (account.length < 9) {
                account = `0${account}`;
            }
            return `${this.bic} ${account}`
        }
    };
};

const createCustomer = (firstName: string, lastName: string, preposition?: string) => {
    return {
        firstName,
        lastName,
        preposition,
        toString() {
            return `${this.firstName}${this.preposition ? ` ${this.preposition}` : ''} ${this.lastName}`;
        }
    };
};

const createBankAccount = (customer: any) => {
    return {
        customer: customer,
        number: createAccountNumber(),
        toString(){
            return `[${this.number.toString()}] ${this.customer.toString()}`
        }
    };
};

const bankAccounts = [
    createBankAccount(createCustomer('Alfred', 'Kwak', 'Jodocus')),
    createBankAccount(createCustomer('Brad', 'Pit')),
    createBankAccount(createCustomer('Jack', 'Sparrow'))
];


bankAccounts.forEach(bankAccount => console.log(bankAccount.toString()));
