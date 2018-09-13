## Extending interfaces

Interfaces can extend each other

```typescript
interface Point {
    x: number;
    y: number;
}

interface ColoredPoint extends Point {
    color: 'red' | 'blue' | 'green';
}
```

---

### Extend existing interfaces

You can also extend an existing interface

```typescript
interface Person {
    name: string;
}

interface Person {
    id: number;
}

const han: Person = {
    name: 'Han Solo',
    id: 21
}
```

**Question:** When can this be useful?

<!-- .element class="fragment" data-fragment-index="0" -->
