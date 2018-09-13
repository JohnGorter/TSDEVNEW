## Configure the compiler

Generate a `tsconfig.json` file.

```bash
tsc --init
```

output in `tsconfig.json`:

<!-- .element class="fragment" data-fragment-index="0" -->

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  }
}
```

<!-- .element class="fragment" data-fragment-index="0" -->

With a bunch of comments

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Include & Exclude files

Choose which files to target

```json
    "include": [
        "src/typescript/**/*"
    ],
    "exclude": [
        "src/typescript/example/server.ts"
    ]
```

Included files by default when not specified:

<!-- .element class="fragment" data-fragment-index="0" -->

*.ts*, *.d.ts*, *.tsx*

<!-- .element class="fragment" data-fragment-index="0" -->

Excluded files by default when not specified:

<!-- .element class="fragment" data-fragment-index="1" -->

*node_modules*, *bower_components*, *jspm_packages*

<!-- .element class="fragment" data-fragment-index="1" -->
