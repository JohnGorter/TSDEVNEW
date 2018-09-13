## Project references - intro

Often, you'll find yourself with a structure like this:

```
src
├── frontend
│   └── client.ts
├── backend
│   └── server.ts
├── shared
│   └── Person.ts
└── tsconfig.json
```

What can be the issue here?

* Contaminate front end code with backend code
* Use test code in production code

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Without project references

A solution:

```
src
├── frontend
│   ├── client.ts
│   └── tsconfig.json
├── backend
│   ├── server.ts
│   └── tsconfig.json
└── shared
    └── Person.ts
```

But results in a lot of duplicate compiler options
* `strict`, `noImplicitThis`, `noImplicitAny`, `...`

---

### Without project references (2)

Remove duplicate settings using `extends`:

```
src
├── frontend
│   ├── client.ts
│   └── tsconfig.json
├── backend
│   ├── server.ts
│   └── tsconfig.json
├── shared
│   └── Person.ts
└── tsconfig.settings.json
```

```js
// ── /src/frontend/tsconfig.json
{ "extends": "../tsconfig.json" }

// ── /src/backend/tsconfig.json
{ "extends": "../tsconfig.json" }

// ── /src/tsconfig.settings.json
{ "compilerOptions": { "strict": true, "noImplicitThis": true /*...*/ } }
```

---

### Without project references (3)

But you need to compile all twice:

```
tsc --outDir dist/frontend -p frontend/
tsc --outDir dist/backend -p backend/
```

... And Results in a deep file structure with `--outDir`

<!-- .element class="fragment" data-fragment-index="0" -->

```
dist
├── frontend
│   ├── frontend
│   │   └── client.js
│   └── shared
│       └── Person.js
└── backend
    ├── backend
    │   └── server.js
    └── shared
        └── Person.js
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Project references

Since TS 3.0 <!-- .element class="corner-ribbon" -->

Better to use Project references

```js
// ── src/frontend/tsconfig.json
{ /*...*/, "references": [{ "shared": "../shared" }] }
// ── src/backend/tsconfig.json
{ /*...*/, "references": [{ "shared": "../shared" }] }
// ── src/shared/tsconfig.json
{ "compilerOptions": { "outDir": "../../dist/shared" }, "extends": "../tsconfig.settings.json" }
// ── src/tsconfig.json
{ "files": [], "references": [{ "path": "src/frontend"}, { "path": "src/backend" }] }
```

`tsc --build`

```
dist
├── frontend
│   ├── client.d.ts
│   └── client.js
├── shared
│   ├── Person.d.ts
│   └── Person.js
└── backend
    ├── server.d.ts
    └── server.js
```

---

### Project references - conclusion

Since TS 3.0 <!-- .element class="corner-ribbon" -->

* Useful for complexer setups
    * client/server/shared
    * src/test
* One-time compile
* Watch all projects
* Steer output
