## Type: `undefined` and `null`

* The `undefined` type has a singleton value: `undefined`.
* The `null` type has a singleton value: `null`.

```typescript
let a: null = null;
a = 42;
// => error: Type '42' is not assignable to type 'null'.
```

* `undefined` and `null` are sub-types of every other type.

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
let a = 3;
a = null;      // => OK
a = undefined; // => OK
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Strict null checks

* Disable the sub-typing using `--strictNullChecks` compiler option

```typescript
let a: number = 3;
a = null;
// => error: Type 'null' is not assignable to type 'number'
a = undefined;
// => error: Type 'undefined' is not assignable to type 'number'
```

---

### Type: `void`

`void` is a type that has 2 values: `undefined` and `null`

```typescript
function info(message: string): void{
    console.log(message);
}

let a = info('');
a = null;      // => OK
a = undefined; // => OK
```

