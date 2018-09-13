## Under the hood

TypeScript is *not* tightly coupled to React for JSX support.

When declaring an element, TypeScript will look for it to be *intrinsic* or *value-based* in the `JSX` namespace.

```js
const anchor = <a href={link}>{text}</a> // intrinsic
const customElement = <myCustomElement></myCustomElement> // value-based
```

---

### Intrinsic elements

```js
const anchor = <a href={link}>{text}</a> // intrinsic
```

Intrinsic means it is declared in `JSX.IntrinsicElements`

```typescript
declare namespace JSX {
    interface IntrinsicElements {
        a: React.HTMLProps<HTMLAnchorElement>;
    }
}
```

---

### Value-based elements

Value-based elements are looked up by identifiers that are in scope.

```typescript
import Dashboard from "./DashboardComponent";

<Dashboard />; // ok
<Blablabla />; // error!
```

However, all value-based components must implement the `render` method defined in the `JSX.ElementClass` interface!

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
namespace JSX {
    interface ElementClass extends React.Component<any, any> {
            render(): JSX.Element | null;
    }
}
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Create your own DSL

You can use tsx to create your own **D**omain **S**pecific **L**anguage!

* https://medium.com/@dempfi/typescript-jsx-syntax-as-typed-dsl-97c052b825c8
* Example: https://www.npmjs.com/package/typed-html

