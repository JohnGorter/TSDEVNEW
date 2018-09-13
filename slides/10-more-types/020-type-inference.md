## Type inference

Type annotations can often be ommitted.

```typescript
let x = 3; // => type: number

function fn(n: number){
    return n + '';
}
let y = fn(x); // => type: string

const z = 42; // => literal type: 42

let a = { b: '', c: 3 }; // => type: { b: string, c: number}
```

It also searches for the best common type.

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
const a = [1, null, 5]; // => type number[]

class Animal { }
class Dog extends Animal { }
class Cat extends Animal { }
const animals = [new Dog(), new Cat()]; // => type Animal[]
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Contextual Type

Type inference also works in *the other direction* in some cases.

```typescript
interface EventHandler {
    (event: { type: string }): void
}

const clickHandler: EventHandler = (event) => {
    event // => type: Event
};

const animals = [new Dog(), new Cat()]; // => type Animal[]
animals
    .map(animal =>  // => type: Animal
        animal.toString())
    .forEach(str => // => type: string
        console.log(str));
```

---

### Contextual types based on declaration

Your variable declaration determines the inferred type.

```typescript
let a = 42; // => type number
const b = 42; // => type 42 (literal type)
```

**Question:** Why the difference?

<!-- .element class="fragment" data-fragment-index="0" -->

You can still overrule it.

<!-- .element class="fragment" data-fragment-index="1" -->

```typescript
const c: number = 42;
```

<!-- .element class="fragment" data-fragment-index="1" -->

