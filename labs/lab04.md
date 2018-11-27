# Lab 4 - Create banking customers

## Preparations

Create the setup you made last lab.

## Exercise 1 - Create account numbers.

1. Create/empty the file `main.ts`.
1. Declare a constant variable called `bic` with value `'TYPEDBANK'`.
1. Declare a constant variable called `upperBound` with value 999999999;
1. Define a function `createAccountNumber` that creates a bank account number.
    *  It should return a new object with
        * `number` (type `number`): use `Math.floor(Math.random() * upperBound) + 1`.
        * `bic` (type `string`): use the value of the constant  `bic`.
1. Add a `toString` method to the account number object. Return the string representation of the account number like `'TYPEDBANK 523432512'`. Try to use a *templated string*.

## Exercise 2 - Create customers

1. Create a function `createCustomer` that creates a new customer.
    * A customer object should have a
        * `firstName` (type `string`),
        * `lastName` (type `string`),
        * optional `preposition` (type `string`)
    * Try to write it in the fat arrow notation.

## Exercise 3 - Create bank accounts

1. Create a function `createBankAccount` that creates a new bank account for a customer.
    * A bank account has 2 properties: `customer` and `accountNumber`
    * The customer object should be provided (may be type `any`)
    * It should call `createAccountNumber` to create the account number.
1. Declare a `bankAccounts` variable without type annotation and initialize it with an array of bank accounts.
Use the `createCustomer` and `createBankAccount` functions you wrote earlier to populate it with some accounts.
1. Can you figure out what the type of `bankAccounts` is here?

## Exercise 4

1. Add a `toString()` method to the bank account object. It should return a string representation of the customer like this:
    * `'[TYPEDBANK 564456] Alfred Jodocus Kwak'`
    * `'[TYPEDBANK 848164] Jack Sparrow'`
1. Call `toString` on each customer in the `bankAccounts` array and print it to the console.
1. Run your application, make sure it prints the bank accounts to the screen.

## Exercise 5 - if time permits

1. Can you make sure that the `toString` for account number will always return the number in 9 digits (pre-fixed with `'0'`'s if needed)

Play around with the setup. See change the compile option `target` to `'es5'`, see what changes in main.js.
We defined the accountNumber as `any` type in our `customer` object. What are the downsides? We'll improve on this in the next lab.
