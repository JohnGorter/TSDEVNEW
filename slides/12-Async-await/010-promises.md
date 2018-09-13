## Promises

![es6](resources/es6.png) <!-- .element class="emblem"  -->

In JavaScript, most of time-consuming interactions are *Async*.
JavaScript uses *Promises*

* A `Promise`
    - Handles an asynchronous action.
    - Represents a value (or `void`) some point in the future.
    - Is guaranteed to resolve a *value* or reject with an *error*

<!-- .element class="fragment" data-fragment-index="0" -->

**Question:** do we know this concept in other languages?

<!-- .element class="fragment" data-fragment-index="1" -->

* `Task` in C#
* `Future` in Scala/Java

<!-- .element class="fragment" data-fragment-index="2" -->

---

## Creating a Promise

![es6](resources/es6.png) <!-- .element class="emblem"  -->

Creating a new promise can be done by calling the constructor.

```javascript
const promise = new Promise((resolve, reject) => {
    if(/* condition */) {
        resolve(42);
    } else {
        reject(new Error());
    }
});
```

You can also create resolved/rejected promise directly.

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
const resolved = Promise.resolve(42);
const rejected = Promise.reject(new Error(""));
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Working with promises

![es6](resources/es6.png)<!-- .element class="emblem"  -->

Consuming a promise.

```typescript
promise
    .then(value => console.log(`Success! with ${value}`))
    .catch(error => console.log(`Failure ${error}`));
```

A promise can be chained.

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
const stringLengthPromise = Promise.resolve(42)
    .then(num => num.toString())
    .then(str => ({ value: str, length: str.length }))
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Combining promises

![es6](resources/es6.png)<!-- .element class="emblem"  -->

```typescript
const p1 = new Promise(resolve => setTimeout(resolve, 500, "one"));
const p2 = new Promise(resolve => setTimeout(resolve, 100, 2));
```

Wait for all promises to complete with `Promise.all`

```typescript
Promise.all([p1, p2])
    .then(results =>
        results[0] // => "one"
        results[1] // => 2
    )
```

Wait for first promise to resolve with `Promise.race`

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
Promise.race([p1, p2]).then(result =>
    result // => 2
)
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Promise types

In TypeScript, a promise is a defined generic type.

```typescript
interface Promise<T> { }

const numPromise: Promise<number>  = Promise.resolve(42);
```

**Important:** promise types resides  `'es2015.promise'`


