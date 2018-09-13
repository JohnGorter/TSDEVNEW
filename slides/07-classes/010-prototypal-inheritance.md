## Prototypal inheritance

* JS supports something called prototypal inheritance

```javascript
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return this.x + ", " + this.y;
};
function ColoredPoint(x, y, color) {
   Point.call(this, x, y);
   this.color = color
}
ColoredPoint.prototype = Object.create(Point.prototype);
ColoredPoint.prototype.toString = function () {
    return Point.prototype.toString.call(this) + ' in ' + this.color;
}
const coloredPoint = new ColoredPoint(1, 2, 'red');
coloredPoint.toString(); // => 1, 2 in red
```

<!-- .element class="fragment" data-fragment-index="0" -->

This works but does `class`y.

<!-- .element class="fragment" data-fragment-index="1" -->

---

## Classes

![es6](resources/es6.png) <!-- .element class="emblem" -->

Since ES6 we can use classes

```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() { return `${this.x}, ${this.y}`; }
}
class ColoredPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `${super.toString()} in ${this.color}`;
    }
}
```

---

## JS classes

![es6](resources/es6.png) <!-- .element class="emblem" -->

JS classes are a big improvement!

* Looks like classes in C# and Java
* Required to use `new` to call the constructor function
* Inheritance is as simple as `extends`
* You can have `static` members
* Support for properties (with `get` and `set`)

But still missing some functionality. <!-- .element class="fragment" data-fragment-index="0" -->

* No `abstract` classes
* Everything is `public`
* No static types (of course)

<!-- .element class="fragment" data-fragment-index="0" -->


