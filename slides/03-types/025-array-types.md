## Array types

Arrays work like JS arrays.

```typescript
const list = [1, 2, 3];
let numbers: Array<number>;
let numbers2: number[];
numbers = numbers2 = list
```

... but have a _generic type_. More on generics later.

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Tuples

Like an array, but with different kind of known types

```typescript
let person: [string, number];
person = ['Henk', 20]; // => OK
person = [10, 'Henk']; // => Syntax error
// Type `[number, string]` is not assignable to type `[string, number]`.
```

Very useful in combination with type inference <!-- .element class="fragment" data-fragment-index="1" -->

```typescript
console.log(person[0].substr(1)); // OK
console.log(person[1].substr(1)); // Error, `number` does not have `substr`
```
<!-- .element class="fragment" data-fragment-index="1" -->

**Question**: When would you use this?

<!-- .element class="fragment" data-fragment-index="4" -->

---

### Fixed Length Tuples

Since TS 2.7 <!-- .element class="corner-ribbon" -->

```typescript
let person: [string, number];

person = [42, 'foo', 'bar'];
// => error: Type '[number, string, string]' is not assignable to type '[number, string]'
```

TS < 2.7 is less strict <!-- .element class="fragment" data-fragment-index="0" -->

```typescript
person = [42, 'foo', 'bar'];

person[0]; // => type number
person[1]; // => type string
person[2]; // => type string | number
```

<!-- .element class="fragment" data-fragment-index="0" -->
