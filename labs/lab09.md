# Lab 9 - Advanced types

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* directory.

## Exercise 1 - Exhaustive languages

In BankConfig, the language is declared to be a `string`. Let's use union types and exhaustiveness checking to prevent us from making obvious mistakes.

1. Alter the type of `language` in `BankConfig`. Make sure the only correct values are `'nl'`, `'en'` and `'fr'`.
1. In the `createAccount` method of `Bank`, change the `console.log` statement. Based on the `language` setting, it should either say '*[bank]* verwelkomt *[customer]*' (for `'nl'`), '*[bank]* welcomes *[customer]*' (for `'en'`) or '*[bank]* accueille *[customer]* (for `'fr'`).
1. Make sure all cases are checked using *exhaustiveness checking*.
1. Make sure you get a compiler error when we now add a new language, for example `'de'`.

## Exercise 2 - Optional BankConfig

Right now, we are required to provide all bank config options when we create a new bank, even if we can think of sane defaults for the values. Let's change that using a mapped type.

1. Add an object containing the sane defaults to the `Bank.ts` file. Add these values as defaults:
    ```ts
    {
        port: 25647,
        bic: 'TYPEDBANK',
        language: 'en',
        name: 'unknown bank'
    }
    ```
1. Change the constructor of `Bank` so it now excepts a partial implementation of the `BankConfig` interface.
1. Inside the constructor, copy over the values to use. If you use an es6 construct here it can be a one-liner.
1. Test your setup by only providing the bank name to the constructor.
1. Bonus: make sure the default object is entirely read-only. Runtime as well as compile time.
