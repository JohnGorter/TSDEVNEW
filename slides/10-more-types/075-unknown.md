### Type: `unknown`

Since TS 3.0 <!-- .element class="corner-ribbon" -->

`unknown` is like `any`, except we need type guards in order to use them.

```typescript
const anything: any = 3;
const uncertain: unknown = 4;

anything.doSomething(); // everything is fine here

uncertain.doSomething(); // ERROR Object is of type 'unknown'.
```

**Question**: When would `unknown` be useful?

<!-- .element class="fragment" -->
