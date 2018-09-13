## Generics

Classes, functions and interfaces can have a _generic type_

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

It looks like:

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
function anyIdentity(arg: any) {
    return arg;
}
```

<!-- .element class="fragment" data-fragment-index="0" -->

**Question:** What's the difference?

<!-- .element class="fragment" data-fragment-index="0" -->

The `identity` return type is the type of the first parameter.

<!-- .element class="fragment" data-fragment-index="1" -->


---

### Generic interfaces

The generic `identity` can also be modelled with an interface

```typescript
interface IdentityFn {
    <T>(arg: T): T;
}
```

We can assign our `identity` function to it:

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
function identity<T> (arg: T){
    return arg;
}

const myIdentity: IdentityFn = identity;
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Generic classes

We can use generics in classes to.

```typescript
class Generator<T> {

    constructor(private seed: T, private step: (value: T) => T) { }

    next() {
        return this.seed = this.step(this.seed);
    }
}

const numberGenerator = new Generator<number>(0, n => n + 1);
const dotGenerator = new Generator<string>('', n => n + '.');

numberGenerator.next(); // => 1
numberGenerator.next(); // => 2
dotGenerator.next();    // => .
dotGenerator.next();    // => ..
```

---

### Generic inference

Often the generic type can be inferred and we don't have to worry about it.

```typescript
const a = [1, 2, 5]; // => type: Array<number>
```

```typescript
class Generator<T> {

    constructor(private seed: T, private step: (value: T) => T) { }

    next() {
        return this.seed = this.step(this.seed);
    }
}
const a = new Generator(0, n => n + 1); // Generator<number>
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Generic constraints

Let's say we create `Longest<T>`.

```typescript
class Longest<T> {
    constructor(public current: T) { }

    add(value: T){
        // => Error  Property 'length' does not exist on type 'T'.
        if(this.current.length < value.length) {
            this.current = value;
        }
    }
}

const longestName = new Longest('Obiwan');
const longestArray = new Longest([0,2]);
```

In order to make this work, we should add a _constraint_

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
class Longest<T extends { length: number }> {
    // ...
}
```

<!-- .element class="fragment" data-fragment-index="0" -->
