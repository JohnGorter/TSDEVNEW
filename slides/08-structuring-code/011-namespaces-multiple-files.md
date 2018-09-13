## Namespaces
<img src="resources/es6.png" alt="ES6" class="emblem">

Namespaces support the use of multiple files.

```typescript
// validation.ts
namespace validation {
    export interface validator { validate(): void; }
}

// firstNameValidator.ts
namespace validation {
    export class firstNameValidator implements validator {
        validate() { /* Todo */}
    }
}
```

---

## Distributing namespaced files

There are two ways of distributing the code.

1. compile all files into one file. <!-- .element class="fragment" data-fragment-index="0" -->
```bash
tsc --outFile validation.js validation.ts firstNameValidator.ts
```
1. or use the default way make sure all files are included with script tags. <!-- .element class="fragment" data-fragment-index="1" -->
```html
<script src="validation.js" type="text/javascript" />
<script src="firstNameValidator.js" type="text/javascript" />
```
