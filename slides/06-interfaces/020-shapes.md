## Our first shape

```typescript
function printAge(aged: { age: number }){
    console.log(aged.age);
}

const frank = { age: 23, name: 'Frank' };
printAge(frank);
```

The *shape* of `aged` in this example is `{ age: number }`. <br />
Object `frank` complies to this shape

`{ age: number }` is an *anonymous interface*

---

### Structural type system

TypeScript's type system is a *structural type system*.

> In structural typing, an element is considered to be compatible with another if, for each feature within the second element's type, a corresponding and identical feature exists in the first element's type.
https://en.wikipedia.org/wiki/Structural_type_system

<!-- .element class="small_quote" -->
