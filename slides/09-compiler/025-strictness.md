## Strictness

There are compiler options that make the compiler more strict

- `--strictNullChecks`
    Enable strict null-check mode. `undefined` and `null` are not in the domain of very type.
- `--noImplicitAny`
    Raise error on expressions and declarations with an implied `any` type
- `--noImplicitThis`
    Raise an error when you use `this` outside of a class or function with `this` parameter.
- `--alwaysStrict`
    Force JavaScript's [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) on all files.

---

### Even more strictness

- `--strictFunctionTypes` (since TS 2.6) Disable bivariant parameter checking for function types.
    ```typescript
    function printN(n: 'n') {
        console.log(n);
    }

    let printMessage: (message: string) => void = printN;
    // => error: Type '(n: "n") => void' is not assignable to type '(message: string) => void'.
    ```
- `--strictPropertyInitialization` (since TS2.7) Ensure non-undefined class properties are initialized in the constructor

Or use: `--strict` to get all of the above (since TS 2.3)

<!-- .element class="fragment" data-fragment-index="0" -->
