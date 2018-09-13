# Lab 5 - Interfaces

## Preparations

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* folder.

In this Lab you are going to refactor and improve the code base to make it more type safe.

## Exercise 1: Create an `AccountNumber` interface

1. Create an `AccountNumber` interface. The interface should describe the shape returned by the `createAccountNumber` function.
1. Add a `accountNumber` parameter of type `AccountNumber` to the `createBankAccount` function. Make sure you provide it at the calling side.
1. Make the return type of `createAccountNumber` function explicitly `AccountNumber`.
1. Make sure that there are no compile errors.

Play around with the `AccountNumber` interface. What happens if you add a property to it? What happens when you remove the explicit return type from the `createAccountNumber` function? Can you explain what's happening here?

## Exercise 2: Create a `Customer` and `BankAccount` interface

1. Do the same for the `createCustomer` function and a new `Customer` interface.
1. Do the same for the `createBankAccount` function and a new `BankAccount` interface. This time, also explicitly type the make the `bankAccounts` array.
