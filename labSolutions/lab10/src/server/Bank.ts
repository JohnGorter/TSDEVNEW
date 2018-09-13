import { Customer } from '../shared/Customer';
import { BankConfig } from '../shared/BankConfig';
import { BankAccount } from '../shared/BankAccount';

const DEFAULT_CONFIG = Object.freeze({
    bic: 'TYPEDBANK',
    language: 'en',
    name: 'unknown bank',
    port: 25647,
} as BankConfig);

export class Bank {

    readonly accounts: BankAccount[] = [];
    readonly config: Readonly<BankConfig>;

    constructor(configOverrides: Partial<BankConfig>) {
        this.config = Object.assign({}, DEFAULT_CONFIG, configOverrides);
    }

    public createAccount(customer: Customer) {
        const account = new BankAccount(customer, this.config.bic);
        this.accounts.push(account);
        switch (this.config.language) {
            case 'nl':
                console.log(`[${this.config.name}] verwelkomt ${account.toString()}`);
                break;
            case 'en':
                console.log(`[${this.config.name}] welcomes ${account.toString()}`);
                break;
            case 'fr':
                console.log(`[${this.config.name}] accueille ${account.toString()}`);
                break;
            default:
                this.logMissingTranslationError(this.config.language);
                break;
        }
        return account;
    }

    private logMissingTranslationError(language: never) {
        console.log(`Missing translation for ${language}.`)
    }
}
