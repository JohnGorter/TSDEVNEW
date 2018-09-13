## Basic types

The primitive types match one-to-one to the JS types

```javascript
const n = 3;
const pi = 3.14;
const str = "a string using 'double quotes'";
const str2 = 'a string using "single quotes"';
const str3 = `a string using back thicks
can be multi line
pi is: ${pi}, or (${Math.floor(pi)})`;
const bool = true;
const und = undefined;
```

```javascript
typeof n; //    => 'number'
typeof pi; //   => 'number'
typeof str; //  => 'string'
typeof str2; // => 'string'
typeof str3; // => 'string'
typeof bool; // => 'boolean'
typeof und; //  => 'undefined'
```
<!-- .element class="fragment" data-fragment-index="1"-->
