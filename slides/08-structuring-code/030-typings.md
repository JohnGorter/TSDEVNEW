## Declaration files

- A declaration file is a declaration of a library.
- It describes the shape of a JavaScript library.

```typescript
// lib.es6.d.ts

declare var Console: {
    prototype: Console;
    new(): Console;
}

interface Console {
    log(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
}
```

---

## Custom declaration file

Generating your own custom declaration files can be done with the `--declaration` compiler option.

<!-- .element class="fragment" data-fragment-index="0" -->
```bash
tsc --declaration
```
<!-- .element class="fragment" data-fragment-index="0" -->

Useful when you are writing your own library and don't want to provide the TypeScript source code.

<!-- .element class="fragment" data-fragment-index="1" -->

Pointing to the declaration files can be done inside the `package.json`.

<!-- .element class="fragment" data-fragment-index="2" -->

```json
{
  "main": "src/main.js",
  "typings": "src/main.d.ts"
}
```
<!-- .element class="fragment" data-fragment-index="2" -->

---

## Declaration file distribution

- 100's of libraries already have declaration files
    - Can be found at: https://github.com/DefinitelyTyped/DefinitelyTyped
- Since *TypeScript 2.0* they can be directly installed using npm under the `@types`-namespace
    - [namespaces on npm](http://blog.npmjs.org/post/116936804365/solving-npms-hard-problem-naming-packages) <!-- .element target="_blank" -->

```bash
npm i -D @types/express # install typings for express
```


---

## Import resolving

```typescript
import * as log4js from 'log4js';
```

TypeScript will try to resolve 'log4js':
1. ./node_modules/log4js/package.json&nbsp;(look&nbsp;for&nbsp;`"typings"`)
1. ../node_modules/log4js/package.json&nbsp;(look&nbsp;for&nbsp;`"typings"`)
1. ../../node_modules/log4js/package.json&nbsp;(look&nbsp;for&nbsp;`"typings"`)
1. etc.
1. ./node_modules/@types/log4js
1. ../node_modules/@types/log4js
1. ../../node_modules/@types/log4js
1. etc.

