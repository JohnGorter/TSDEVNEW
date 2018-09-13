## Exhaustiveness checking

<i class="fa fa-bed icon-big" aria-hidden="true"></i>

Exhausted yet? Just checking

---

## Exhaustiveness checking

How to let the compiler tell us when we don't cover all variants?

```typescript
function handleLiteral(literal: Literal) {
    // Do something...
}

switch (node.type) {
    case Syntax.Literal:
        handleLiteral(node);
        break;
    // should error here - we didn't handle case "Identifier"
}
```

* Two options:
    * Using `--strictNullChecks`
    * Using `never`

<!-- .element class="fragment" data-fragment-index="0" -->


---

### Exhaustiveness checking `--strictNullChecks`

Turn on `strictNullChecks` in the compiler options.

```typescript
function handleLiteral(literal: Literal): number {
    // Do complicated stuff
    return 4;
}

function parseNode(node: Node): number {
    switch (node.type) {
        case Syntax.Literal:
            return handleLiteral(node);
    }
}
// => Error: Function lacks ending return statement
//  and return type does not include 'undefined'.
```

---

### Exhaustiveness checking with `never`

**Question:** How can we do exhaustiveness checking with `never`?

```typescript
function handleLiteral(literal: Literal): number {
    // Do complicated stuff
}

function handleError(shouldntExist: never) {
    console.error(`Node not handled: ${shouldntExist}`);
}

switch (node.type) {
    case Syntax.Literal:
        handleLiteral(node);
        break;
    default:
        handleError(node);
        // =>  Argument of type 'Identifier'
        //      is not assignable to parameter of type 'never'.
}
```

<!-- .element class="fragment" data-fragment-index="0" -->
