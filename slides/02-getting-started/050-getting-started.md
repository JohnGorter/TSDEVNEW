## Getting started

![nodejs & npm](resources/node-npm.png) <!-- .element class="small-logo" -->

1. Install NodeJS & npm
    * [http://nodejs.org](http://nodejs.org) <!-- .element target="_blank" -->
2. Open a command prompt. Go to a (new) working directory.
2. Install TypeScript (command line)
    * Local:
    ```bash
    $ npm i typescript
    ```
    * Global:
     ```bash
     $ npm i -g typescript
     ```

---

## My first project

Run the typescript compiler (command line)

```bash
# local:
$ node_modules/.bin/tsc --version
```

```bash
# global:
$ tsc --version
```

Create your typescript project file

```bash
# local:
$ node_modules/.bin/tsc --init
```

```bash
# global:
$ tsc --init
```

This created the typescript config file `tsconfig.json`

---

## Hello world

Open the directory in a code editor. For vscode type `code .`
* Create a file `HelloWorld.ts` in the same directory.
* Add the following code:

```typescript
class HelloWorld {
    static sayHello() {
        console.log('Hello world');
    }
}
HelloWorld.sayHello();
```

Now run the TypeScript compiler

```bash
# local:
$ node_modules/.bin/tsc
```

```bash
# global:
$ tsc
```

---

## Inspect the result

Open the file `HelloWorld.js`. This should look familiar to you.

Run the file using nodejs:

```bash
$ node HelloWorld.js
Hello world
```
