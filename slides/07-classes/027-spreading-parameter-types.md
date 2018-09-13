### Overload of overloads

Ever see a _death by a thousand overloads_?

```ts
function create<TReturn>(Class: { new(): TReturn }): TReturn
function create<T, TReturn>(Class: { new(arg: T): TReturn }, arg: T): TReturn
function create<T1, T2, TReturn>(Class: { new(arg: T1, arg2: T2): TReturn }, arg: T1, arg2: T2)
    : TReturn
function create(Class: { new(...args: any[]): any }, ...args: any[]) {
    return new Class(...args);
}
```

```ts
class Person {
    constructor(public name: string, public age: number){}
}
create(Person, 'foobar', 42);
```

<!-- .element class="fragment" data-fragment-index="0" -->

```ts
// ... wait, what about 3 arguments?

create(class { constructor(s: string, n: number, b: boolean) {} }, '', 0, false);
// ERROR => Expected 1-3 arguments, but got 4.
```

<!-- .element class="fragment" data-fragment-index="1" -->

---

### Spreading parameter types

Since TS 3.0 <!-- .element class="corner-ribbon" -->

```ts
function create<TS extends any[], TReturn>
    (Class: { new(...args: TS): TReturn }, ...args: TS): TReturn {
    return new Class(...args);
}
```

```ts
create(class { constructor(s: string, n: number, b: boolean) {} }, '', 0, false);

// support infinite arguments
```
