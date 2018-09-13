import { BankServer } from './BankServer';
import { Bank } from './Bank';
import { Customer } from '../shared/Customer';

const bank = new Bank({ name: 'TypeBank' });
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pit'));
bank.createAccount(new Customer('Jack', 'Sparrow'));

new BankServer(bank).listen();
