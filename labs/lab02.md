# Lab 2 - Getting started

Prerequisites:
    - NodeJS installed
    - NPM installed

1. Create an empty working directory. Open that directory in the command line of your choice.
1. Initialize a new TypeScript project.
    - Create a `package.json`.
        - `npm init --yes`
    - Install TypeScript as a local dev dependency
        - `npm install --save-dev typescript`
    - Create a `tsconfig.json`
        - `./node_modules/.bin/tsc --init`
        - Compile your code to `ES6`
        - Set `sourceMap` to `true`
        - Set `strict` to false.
1. Setup your favorite IDE.
    - If using VSCode look in the slides on how to do this.
1. Create a file `main.ts`. This will be the home of our TypeScript application for now.
1. Play around with a hello world type application. Make sure errors are displayed in your IDE.
1. Try out some constructs you know from JavaScript, like `function`s, `if`-`else`, `for`, `while`
