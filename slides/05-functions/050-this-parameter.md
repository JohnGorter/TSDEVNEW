## `this` parameters

If you're not using arrow functions, there is a way to specify the type of `this`.

```typescript
function clickHandler(this: HTMLButtonElement) {
    this.innerText = 'Clicked!';
}

const button: HTMLButtonElement = document.createElement('button');
button.addEventListener('click', clickHandler);

clickHandler();
// => Error: The 'this' context of type 'void'
// is not assignable to method's 'this' of type 'HTMLButtonElement'.
```

The `this` here is a _fake parameter_

<!-- .element class="fragment" data-fragment-index="0" -->
