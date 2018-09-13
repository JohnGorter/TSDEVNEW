import { Backend } from './Bankend';
import { AccountRowStamper } from './AccountRowStamper';

const backend = new Backend();
const tableBody = document.querySelector('tbody');
const accountRowStamper = new AccountRowStamper(document.querySelector('template'));
const addButton = document.querySelector('button');
const form = document.querySelector('form');
addButton.addEventListener('click', async () => {
    const firstNameInput = form.firstName as HTMLInputElement;
    const lastName = form.lastName as HTMLInputElement;
    const preposition = form.preposition as HTMLInputElement;
    const account = await backend.addAccount({
        firstName: firstNameInput.value,
        lastName: lastName.value,
        preposition: preposition.value
    });
    tableBody.appendChild(accountRowStamper.stamp(account));
});

fetchData();

async function fetchData() {
    const bankPromise = backend.bank();
    const bankAccountsPromise = backend.accounts();
    const bankConfig = await bankPromise;
    const bankAccounts = await bankAccountsPromise;
    const h1Element = document.querySelector('h1');
    h1Element.textContent = bankConfig.name;
    bankAccounts.forEach(bankAccount =>
        tableBody.appendChild(accountRowStamper.stamp(bankAccount)));
}
