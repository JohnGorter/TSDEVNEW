## Union types

You can specify that an object is of type `A` *or* `B` using `A | B`.

```typescript
class Person {
    name: string;
}

function printName(personOrName: string | Person) {
    console.log(personOrName.toString());
        // => OK, both `string` and `Person` have `toString()`
    console.log(personOrName.name);
        // error! Property 'name' does not exist on type 'string | Person'.
}
```
