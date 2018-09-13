import { BankAccount } from '../shared/BankAccount';

export class AccountRowStamper {

    constructor(private template: HTMLTemplateElement) { }

    stamp(account: BankAccount): Node {
        this.template.content.querySelector('.account').textContent = account.number.toString();
        this.template.content.querySelector('.name').textContent = account.customer.toString();
        return document.importNode(this.template.content, true);
    }
}
