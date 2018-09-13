## Discriminated Unions

Combine literal types, union types, type guards and type aliases.

```typescript
interface Identifier {
    type: 'Identifier';
    name: string;
}
interface Literal {
    type: 'Literal';
    value: string | boolean | number | null;
    raw: string;
}
type Node = Identifier | Literal;

const node: Node = /**/;
if (node.type === 'Literal') { // => OK, all unified types have a `type`
    node// => type: Literal
} else {
    node// => type: Identifier
}
```

A bit complicated, but extremely powerful

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Discriminate using an object

You can also discriminate using an enum

```typescript
enum Syntax {
    Literal = 'Literal',
    Identifier = 'Identifier'
}

interface Identifier { type: Syntax.Identifier; name: string; }
interface Literal { type: Syntax.Literal; value: number; }
type Node = Identifier | Literal;

const node: Node = /**/;
if (node.type === Syntax.Literal) { // Type guard!
    node// => type: Literal
} else {
    node// => type: Identifier
}
```
