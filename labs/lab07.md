# Lab 7 - Structuring code

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* directory.

## Exercise 1 - Split the code into Multiple files.

Split all classes out into it's own files. Use `modules` to link everything back up together

1. Create a directory `src/` to hold all source files
1. We move code we intent to reuse across the client and server side code in shared folder
    * Create a directory `src/shared`.
    * Add `Customer` class to `src/shared/Customer.ts`
    * Add `BankAccount` class to `src/shared/BankAccount.ts`
    * Add `AccountNumber` class to `src/shared/AccountNumber.ts`
    * Add `BankConfig` interface to `src/shared/BankConfig.ts`.
1. We move server specific code to a src/server directory
    * Create a directory `src/server`
    * Add `Bank` class to `src/server/Bank.ts`.
    * Add the remaining code from the `main.ts` file to `src/server/main.ts`
1. Make sure you have no compile errors and everything still works as expected.

## Exercise 2 - Create a bank web server

For this exercise we'll use the express web server.

1. Install express using `npm i express body-parser`
1. Install the *typings* for express using `npm i -D @types/express @types/body-parser`
1. Can you explain why we use `-D` here?
1. Add a property `portNumber` to the `BankConfig` interface. Can you spot the compile error? Add a port when creating your Bank.
1. Create a new class `BankServer`. The constructor should take a `Bank`.
1. Add a `listen` method to the `BankServer`. It should create a webserver which listens to the port configured in the `config` of that `Bank`. Use the `express` webserver with `import express = require('express');`. Log a line to the console in the `listen` method to indicate that you are running the webserver.
1. Implement the following methods:
    * HTTP GET on /api/bank should provide the config of the bank as a JSON object
    * HTTP GET on /api/accounts should provide the bank accounts belonging to the bank as a JSON array.

## Exercise 3 (if time permits)

1. Implement the HTTP POST on /api/accounts. It should add the provided JSON customer to the current bank and return a 204 - No Content. Tip: you might need the `'body-parser'` now.
1. If the post is implemented. Try it out with a tool like Postman or an HttpRequester browser plugin.
1. Don't forget to implement some validation. These customers are invalid:

```json
{
	"firstName": "only firstname"
}

{
	"lastName": "only lastname"
}

{
	"firstName": "John",
	"lastName": "Doe",
    "preposition": 42
}
```
