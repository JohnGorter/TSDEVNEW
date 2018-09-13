## Mapped types

Let's say you're building a library

```typescript
interface Config {
    concurrency: number;
    path: string;
}

class MyLib {
    constructor(private config: Config) { }
}
```

... but all config options are optional

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
interface OptionalConfig {
    concurrency?: number;
    path?: string;
}
```

<!-- .element class="fragment" data-fragment-index="0" -->

... can't we do better?

<!-- .element class="fragment" data-fragment-index="1" -->

---

### Map optional types

We can use a mapped type

```typescript
interface Config {
    concurrency: number;
    path: string;
}

class MyLib {
    constructor(private config: Partial<Config>) { }
}
```

Defining `Partial<T>` looks complicated (but is powerful)

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Build in mapped types

TypeScript comes with some mapped types out-of-the-box

* `Partial<T>`
* `Readonly<T>`
* `Pick<T, K extends keyof T>>`
* `Record<K extends string, T> `
* `Required<T>` (since TS 2.8)

More on mapped types: [https://blog.mariusschulz.com/2017/01/20/typescript-2-1-mapped-types](https://blog.mariusschulz.com/2017/01/20/typescript-2-1-mapped-types) <!-- .element target="_blank" -->

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Conditional types introduction

Let's say you have this method:

```ts
function flatten(obj: object) {
    const flattened: any = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' || typeof obj[key] === 'function') {
            flattened[key] = JSON.stringify(obj[key]);
        } else {
            flattened[key] = obj[key];
        }
    });
    return flattened;
}
```

Describe the shape of `flattenedPerson` here:

<!-- .element class="fragment" data-fragment-index="0" -->

```ts
const person = { age: 42, address: { street: 'fake street', houseNumber: 123  } };

const flattenedPerson = flatten(person);
```

<!-- .element class="fragment" data-fragment-index="0" -->

```ts
const flattenedPerson: {age: number, address: string} = flatten(person);
```

<!-- .element class="fragment" data-fragment-index="1" -->

---

### Conditional types

Since TS 2.8 <!-- .element class="corner-ribbon" -->

We can define this as a conditional type

```ts
type Flattened<T> = {
    [K in keyof T]: T[K] extends (Function | object) ? string: T[K];
}

function flatten<T>(obj: T): Flattened<T> {
    // ...
}

```

```ts
const person = {
    name: 'foobar',
    address: {
        street: 'fake street',
        houseNumber: 123
    }
};

const flattenedPerson = flatten(person);
console.log(flattenedPerson);
```
