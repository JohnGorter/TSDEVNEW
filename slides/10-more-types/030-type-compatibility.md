## Type compatibility

The type of object `a` is compatibility with the type of object `b`, if the *shape* of `b` is included in the *shape* of `a`.

```typescript
interface Aged {
    age: number;
}

class Person {
    age: number;
}

let p: Aged = new Person(); // => OK

const ageless = { age: Infinity, answer: 42 };
p = ageless; // => OK
```

---

### Comparing functions

When comparing function types, extra parameters are ignored.

```typescript
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
```

This is a good thing

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
const items = [42, 1337];

// Shouldn't force extra parameters
items.forEach( (n, index, array) => console.log(n));

// This is OK as well!
items.forEach( n => console.log(n));
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

#### Comparing function return types

Return type is part of the function's shape.

```typescript
let x = () => ({ a: 0 });
let y = () =>  ({ a: 0, s: '' });
x = y; // => OK
y = x; // => error! '() => { a: number; }' is
       //  not assignable to type '() => { a: number; s: string; }'.
```
