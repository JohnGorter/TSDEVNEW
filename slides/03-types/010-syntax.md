## Syntax

Add type annotations with a colon `:`, right after the declaration

```typescript
let name: string = 'nicojs';

function add(x: number, y: number): number {
    return x + y;
}

let list: number[] = [2, 4, 5]; // Synonym: var list:Array<number>

name = true;
// => Error: Type 'boolean' is not assignable to type 'string'

list = add;
// => Error: Type '(x: number, y: number) => number' is not assignable to type 'number[]'.
```

When initializing a variable while declaring, the type annotation can be left out. <!-- .element class="fragment" data-fragment-index="0" -->

---

## Syntax explained

Types...

* Are optional
* Only at compile time
    * They are simply removed when transpiled to JavaScript
* Closely resembles JavaScript types
    * `string`, `boolean`, `number`, `array`, `undefined`, `null`, `object`
* Inferred when possible
* Comparable to static code analysis
