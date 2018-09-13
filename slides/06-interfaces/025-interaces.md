## Interface

```typescript
interface Aged {
    age: number;
}

function printAge(aged: Aged){
    console.log(aged.age);
}

const frank = { age: 23, name: 'Frank' };
printAge(frank);
```

Naming an interface is just creating an *alias* for the shape.

---

### Explicit implementation


```typescript
interface Aged {
    age: number;
}

const frank: Aged = { age: 23, name: 'Frank' };
// => Type '{ age: number; name: string; }' is not assignable to type 'Aged'.
//       Object literal may only specify known properties,
//        and 'name' does not exist in type 'Aged'.
printAge(frank);
```

A type annotation will demand that the shape of an object does not have excess properties.

---

### Optional properties

You can specify optional properties using `?`

```typescript
interface Options {
    files?: string[];
    watch?: boolean;
    project?: string;
}

const options: Options = {};
options.watch = true;
options.files = 'error';
// => Type '"error"' is not assignable to type 'string[]'.
options.unknown = 'error';
// => Property 'unknown' does not exist on type 'Options'.
```

Useful when defining config objects, a common JavaScript pattern.
<!-- .element class="fragment" -->

---

### Readonly properties

```typescript
interface FrozenPoint {
    readonly x: number;
    readonly y: number;
}

const origin: FrozenPoint = { x: 0, y: 0 };

origin.x = 3;
// =>  error: Cannot assign to 'x' because it is a constant or a
// read-only property.
```

This is also implemented for `Object.Freeze`:

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
interface Point { x: number; y: number; }
const origin: Point = { x: 0, y: 0 };

const readonlyOrigin = Object.freeze(origin);
readonlyOrigin.x = 34;
// =>  error: Cannot assign to 'x' because it is a constant or a
// read-only property.
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Index accessors

It is also possible to add an index accessors

```typescript
interface Person {
    firstName: string;
    age: number;
}
const personsByFirstName: {
    [firstName: string]: Person
} = { };

personsByFirstName['Gijs'] = { firstName: 'Gijs', age: 25 }; // => OK
personsByFirstName.frank = {firstName: 'frank', age: 23 };
// => Error: Property 'frank' does not exist on type
//       '{ [firstName: string]: Person; }'
```

---

### Function shapes

It is even possible to define the shape of a function using an interface

```typescript
interface BinaryOperation {
    (a: number, b: number): number;
}

const sum: BinaryOperation = (a, b) => a + b;
    // => OK, a and b are inferred as numbers now

const stringyfied: BinaryOperation = (a, b) => a + '+' + b;
// => Error: Type '(a: number, b: number) => string' is not assignable to type
//   'BinaryOperation'.
//      Type 'string' is not assignable to type 'number'
```
