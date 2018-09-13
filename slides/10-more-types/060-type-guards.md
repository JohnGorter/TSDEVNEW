## Type guards

Union types need *type guards* to make them useful.

```typescript
class Person {
    name: string;
}

function printName(personOrName: string | Person) {
    if(typeof personOrName === 'string') {
        console.log(personOrName); // => OK, type: string
        console.log(personOrName.name);
        // => error! Property 'name' does not exist on type 'string'.
    } else {
        console.log(personOrName.name); // => OK, type: Person
    }
}
```

Type guards change the type of a variable for that specific code branch only

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Custom type guards

You can create your own type guards.

```typescript
class Person { talk() { console.log('Talk'); } }
class Bird { fly() { console.log('Start flying'); } }

function isBird(maybeBird: Bird | Person): maybeBird is Bird {
    return (maybeBird as Person).talk === undefined;
}

function doStuff(animal: Bird | Person) {
    if (isBird(animal)) { // => Type guard!
        animal.fly(); // => OK, type is Bird
    } else {
        animal.talk(); // => OK, type is Person
    }
}
```

Custom type guards are functions that are annotated to return `param is B`, that return a true if `param` is indeed a `B`.

<!-- .element class="fragment" data-fragment-index="0" -->

---

#### Caution!

Be sure your type guard works!

```typescript
function isArray(maybeArray: string | any[]): maybeArray is Array<any> {
    return typeof maybeArray.length === 'number';
    // can someone spot the bug?
}

let a: string[] | string = 'Lorum ipsum';

if(isArray(a)){
    a.pop(); // => error at runtime! TypeError: a.pop is not a function
}
```

With great power comes great responsibility.

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Build in type guards

<table>
    <thead>
        <tr>
            <th>Syntax</th>
            <th>Discovers type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`Array.isArray(arr)`</td>
            <td>Array</td>
        </tr>
        <tr>
            <td>`typeof x === 'string'`, <br />`typeof x === 'number'`, etc.</td>
            <td>`string`, `number`, etc</td>
        </tr>
        <tr>
            <td>`a instanceof Class`</td>
            <td>Any class type</td>
        </tr>
    </tbody>
</table>
