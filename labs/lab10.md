# Lab 10 - Await async calls

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* directory.

In this lab, we'll change the client to retrieve information from the server and show it on the screen. You can reuse the classes from the 'src/shared' folder so you don't have to recreate the `BankConfig` or `BankAccount` classes.

**Note:** Make sure that your server typescript compiler as well as your client typescript compiler are watching your files and that your server is running.

## Exercise 1 - Show name of the `BankConfig`

1. In the 'client' directory, create a new file to hold a new `Bankend` class, responsible for http calls to the server.
1. In this new class, create a method for retrieving a `BankConfig` from the server. You can use the HTML5's `fetch` experimental API. It returns a (native) `Promise` for all calls:
    ```typescript
    fetch('/api/bank')
            .then(response => response.json() as Promise<BankConfig>);
    ```
1. In your 'client.ts' file, use the newly created function to retrieve the name of the current bank and to display it on the screen. You can select the title on the screen with: `document.querySelector('h1')`.
1. Test it out and see that you can actually see the name of the bank.
1. Now try to replace `promise.then()` calls to `await promise` calls in your 'client.ts' and `Backend` class.

## Exercise 2 - Show `BankAccount`s

1. Also create a method for retrieving `BankAccount`s from the server in your `Backend` class.
1. To display them in the browser you'll need to stamp out the html5 `template` element in the accounts table. You can use this piece of code to accomplish this:
    ```typescript
    const template = document.querySelector('template');
    const tableBody = document.querySelector('tbody');

    // for each account in bankAccounts:
    template.content.querySelector('.account').textContent = account.number.toString();
    template.content.querySelector('.name').textContent = account.customer.toString();
    tableBody.appendChild(document.importNode(this.template.content, true));
    ```
1. Now try it out in the browser. What happens to the account number and customer? Can you explain what is happening here? Try to come up with a solution.

## Exercise 3 - Create `BankAccount`s (if time permits)

1. In your `Backend` class Create a method for posting `BankAccount`'s to the server.
1. Now make sure that whenever the end user clicks the plus (`+`) button the account gets stored.
1. If that works, is the `AccountNumber` itself generated on the client or the server? Make sure it is the server.
1. Add the new account to the account table when it is stored correctly on the server (in-memory).
