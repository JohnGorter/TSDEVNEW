## Fat arrow functions

You can use `()=>` to create a *fat arrow function*

![es6](resources/es6.png)<!-- .element class="emblem"  -->

```typescript
const f = (x: number) => {
    return x + x;
}
```

or, when it is a one-line, omit the `return` keyword

```typescript
const f = (x: number) => x + x;
```
