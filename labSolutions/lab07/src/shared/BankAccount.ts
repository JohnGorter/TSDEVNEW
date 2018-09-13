import { Customer } from './Customer';
import { AccountNumber } from './AccountNumber';

export class BankAccount {

    readonly number: AccountNumber;

    constructor(public customer: Customer, bic: string) {
        this.number = new AccountNumber(bic);
     }

    toString() {
        return `[${this.number.toString()}] ${this.customer.toString()}`
    }
}
