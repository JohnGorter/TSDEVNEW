import { Customer } from './Customer';
import { AccountNumber } from './AccountNumber';

const isBankAccount = (bankOrCustomer: Customer | BankAccount): bankOrCustomer is BankAccount =>
    (bankOrCustomer as BankAccount).customer !== undefined;

export class BankAccount {

    readonly number: AccountNumber;
    public customer: Customer;

    constructor(copy: BankAccount)
    constructor(customer: Customer, bic: string)
    constructor(customerOrCopy: Customer | BankAccount, bic?: string) {
        if (isBankAccount(customerOrCopy)) {
            this.number = new AccountNumber(customerOrCopy.number);
            this.customer = new Customer(customerOrCopy.customer);
        } else {
            this.number = new AccountNumber(bic || '');
            this.customer = customerOrCopy;
        }
    }

    toString() {
        return `[${this.number.toString()}] ${this.customer.toString()}`
    }
}
