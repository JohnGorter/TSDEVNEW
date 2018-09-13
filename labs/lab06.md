# Lab 6 - Classes

## Preparations

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* folder.

## Exercise 1 - Converting interfaces to classes

1. Inside the main.ts file, change the `interface` keyword in front of `BankAccount` to `class`.
    * Can you explain why the code still compiles?
1. Change the `createBankAccount` function to be the `constructor` of `BankAccount`
1. Do the same for the `Customer` and `AccountNumber` and their `create...` functions.

## Exercise 2 - Creating a Bank class.

We want to add a `Bank` class. We expect it to have a lot of configuration, so we decide to capture config
in a separate interface called `BankConfig`.

1. Inside the `Main.ts` create an `interface` called `BankConfig`.
1. Add the following fields (type: `string`)
    * `name`, `language` and `bic`.
1. Create a class called `Bank`, with:
    * A `private` field `config` of type `BankConfig`
    * A `private` field `accounts` of type `BankAccount[]`
    * A `constructor` which accepts a `BankConfig` and assigns it to its own `config`.
1. Create a (public) method called `createAccount` which creates a bank account for a given customer and adds it to the private `accounts` array. It should also print `'[${bankName}] welcomes ${account}` to the console.
1. Make sure the `bic` from the `BankConfig` class is used to instantiate the `AccountNumbers`
1. Both fields `config` and `accounts` should never be reassigned. Make sure this is the case.
1. Test it out! Remove the old `bankAccounts` array. Instead, create a new bank and add create some accounts. Make sure everything works and you don't have compile errors.

