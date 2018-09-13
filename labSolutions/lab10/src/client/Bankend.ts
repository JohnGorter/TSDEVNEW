import { Customer } from '../shared/Customer';
import { BankAccount } from '../shared/BankAccount';
import { BankConfig } from '../shared/BankConfig';

export class Backend {

    async bank(): Promise<BankConfig> {
        const response = await fetch('/api/bank')
        return response.json();
    }

    async accounts(): Promise<BankAccount[]> {
        const response = await fetch('/api/accounts');
        const bankAccounts: BankAccount[] = await response.json();
        return bankAccounts.map(bankAccountJson => new BankAccount(bankAccountJson));
    }

    async addAccount(customer: Customer): Promise<BankAccount> {
        const response = await fetch('/api/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        });
        const bankAccountJson: BankAccount = await response.json();
        return new BankAccount(bankAccountJson);
    }

}
