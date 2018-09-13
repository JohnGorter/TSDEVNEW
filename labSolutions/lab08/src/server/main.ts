import { BankServer } from './BankServer';
import { Bank } from './Bank';
import { Customer } from '../shared/Customer';

const bank = new Bank({ bic: 'TYPESDBANK', language: 'nl', name: 'TypeBank', port: 25647 });
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pit'));
bank.createAccount(new Customer('Jack', 'Sparrow'));

new BankServer(bank).listen();
