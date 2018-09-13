# Lab 11 - Decorators

If the exercise was not successful in the last lab, you can copy and paste the pervious solution from the *labs_solution* folder.

The Dutch government require banks to keep an audit trail of every customer.
So our bank needs to do the same.
In this lab you are going to write a decorator that will `auditLog` every time an account is created.

## Exercise 1 - Create auditLog

- In the `/src/server` directory, create an `auditLog.ts` file.
    - Create an `@auditLog` decorator that can be placed on a method. _Hint:_ you might have to wrap the original method inside the decorator.
