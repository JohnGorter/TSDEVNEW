import { Customer } from '../shared/Customer';
import { BankConfig } from '../shared/BankConfig';
import { BankAccount } from '../shared/BankAccount';

export class Bank {

    readonly accounts: BankAccount[] = [];

    constructor(readonly config: BankConfig) { }

    public createAccount(customer: Customer){
        const account = new BankAccount(customer, this.config.bic);
        this.accounts.push(account);
        console.log(`[${this.config.name}] welcomes ${account.toString()}`);
    }
}
