## Literal types

A literal can also be a type.

```typescript
let theAnswerToEverything: 42 = 42;
theAnswerToEverything = 6; // => Type '6' is not assignable to type '42'.

let isTheAnswer42: true = true;
let toBeOrNotToBe: 'thatsTheQuestion' = 'thatsTheQuestion';
```

This can be useful in some use cases, more on that later.
