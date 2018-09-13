## Modules

Using `export` or `import` will *determine* that your current ts file is a module.

```typescript
//  src/lib/math.ts
export function sum (x, y) {
    return x + y
};
export var pi = 3.141593;

//  src/someApp.ts
import * as math from './lib/math';
console.log("2π = " + math.sum(math.pi, math.pi));

//  src/otherApp.ts
import { sum, pi } from './lib/math';
console.log("2π = " + sum(pi, pi));
```

---

## Imports

Imports can be relative or non-relative.

- Relative import <!-- .element class="fragment" data-fragment-index="0" -->
    - Starts with `./` or `../`
    - Is always relative to the current file.
    - Example: `import * as math from '../lib/math';`
- Non-relative import <!-- .element class="fragment" data-fragment-index="1" -->
    - Resolved using `node_modules` because of the `--moduleResolution` flag.
    - Example: `import * as express from 'express'; `

---

## Renaming modules

To avoid conflicting names it's possible to rename `import` and `export` statements.

```typescript
export { math as mathLib } from './lib/math';

import { sum as calcSum } from './lib/math';
```

---

## Default exports

Every module can have one `default export`.

```typescript
// JQuery.ts
export default let $: JQuery;
```

<!-- .element class="fragment" data-fragment-index="0" -->

Import without `{ }`

<!-- .element class="fragment" data-fragment-index="1" -->

```typescript
import $ from './JQuery';

$('button').html('Click me!');
```

<!-- .element class="fragment" data-fragment-index="1" -->

---

## Triple-Slash Directives

- Single line comments containing a XML tag. <!-- .element class="fragment" data-fragment-index="0" -->
```typescript
///<reference path='../express/express.d.ts' />
```
- Has to be at the top of a file. <!-- .element class="fragment" data-fragment-index="1" -->
- It hints the compiler. <!-- .element class="fragment" data-fragment-index="2" -->
    - Not needed anymore since we can use `tsconfig.json`
