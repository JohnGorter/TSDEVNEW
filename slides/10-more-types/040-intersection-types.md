## Intersection types

Intersection types combine multiple types into one using `&`.

```typescript
interface Labelled {
    label: string;
}

function label<T>(target: T): T & Labelled {
    const labelledTarget = target as T & Labelled;
    labelledTarget.label = 'something';
    return labelledTarget;
}

const person = { age: 30 };
const labelled = label(person);
// => type: { age: number } & Labelled

labelled.label; //=> This can now be used
```
