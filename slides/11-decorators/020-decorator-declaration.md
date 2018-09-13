## Syntax

`@expression` is used and must be evaluated to a function at runtime.
Decorators can be applied in multiple ways.

```typescript
@logClass
class Person {
    @logProperty("Person married? %b") married: boolean = false;

    constructor(private name: string) {
    }

    @logMethod
    marry(@logParameter otherPerson: Person) {
        console.log(`${this.name} marries to ${otherPerson.name}`)
    }
}

new Person('harry').marry(new Person('diane'));

// Call: marry with [{"name":"diane"}]
// harry marries to diane
```

---

## Syntax

Decorators are just functions.

```typescript
function logMethod(target: Object, key: string, value: any) {
    console.log(`Registering logMethod for ${target}${key}`);

    return {
        value: function (...args: any[]) {
            console.log(`Call: ${key} with ${JSON.stringify(args)}`);

            return value.value.apply(this, args);
        }
    };
};
```

---

## Decorators factories

If the decorator needs to be customized before applying. You can write a decorator factory.

```typescript
function logMethod(time: string) {
    return function logMethod(target: Object, key: string, value: any) {
        console.log(`Registering logMethod for ${target}${key}`);

        return {
            value: function (...args: any[]) {
                console.log(`Call: ${key} with
                    ${JSON.stringify(args)} at: ${time}`);
                return value.value.apply(this, args);
            }
        };
    }
};

@logMethod(new Date().toLocaleTimeString())
```

Angular uses decorator factories.

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Decorator evaluation

There is a specific order decorators will be evaluated.

1. Parameter, Method, Accessor, property decorators for each *instance* member.
1. Parameter, Method, Accessor, property decorators for each *static* member.
1. Parameter decorator for constructor.
1. Class decorator for class.
