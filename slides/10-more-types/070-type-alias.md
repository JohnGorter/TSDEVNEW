## Type alias

Interfaces are powerful, but cannot name union/intersection types.

```typescript
interface A {}
interface B {}

interface AorB extends A | B { // => Syntax error!
}
```

We need a type alias for this

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
type AorB = A | B;
const a: AorB = {};
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

#### String literal types

A common use case for a type alias is a string literal union type.

```typescript
type TagName = 'img' | 'div' | 'p';

function createElement (name: TagName){
}

createElement('canvas');
// => error! Argument of type '"canvas"'
// is not assignable to parameter of type 'TagName'.
```

**Question:** Why not use an `enum` type?

<!-- .element class="fragment" data-fragment-index="0" -->

