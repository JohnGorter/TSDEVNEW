## Structuring code

Choose between *namespaces* and *modules*.

- Namespaces <!-- .element class="fragment" data-fragment-index="0" -->
    - Work using plain JavaScript.
    - Are easier to use in the browser.
    - Are a great way to get started for beginners.
- Modules <!-- .element class="fragment" data-fragment-index="1" -->
    - Require a module loader.
        - NodeJS has it's own module loader.
        - For web, choose a library (`require.js`, `webpack`, etc.)
    - Use ES6 specified syntax (amongst others).
    - Map one-to-one with files. 