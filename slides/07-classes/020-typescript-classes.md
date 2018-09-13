## Classes in TypeScript

Classes in TypeScript look slightly different

```typescript
class Point {
    x: number; y: number;
    constructor(x: number, y: number) {
        this.x = x; this.y = y;
    }

    toString() { return `${this.x}, ${this.y}`; }
}

class ColoredPoint extends Point {
    private color: string;
    constructor(x: number, y: number, private color: string) {
        super(x, y); this.color = color;
    }

    toString() { return `${super.toString()} in ${this.color}`; }
}
```

---

## Classes in TypeScript

Classes in TypeScript are more complete.
* Supports `abstract` classes and methods
* Supports `private`, `public` and `protected`
* Supports generic classes
* Supports explicit interface implementation with `implements`
* A class is always associated with a static type
```typescript
const point: ColoredPoint = new ColoredPoint(1, -3, 'red');
```

---

### Constructor

A class can have exactly one `constructor` implementation.

```typescript
class Point {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
```

Constructors support the shortened syntax <!-- .element class="fragment" data-fragment-index="0" -->

```typescript
class Point {
    constructor(private x: number, private y: number) { }
}
```
<!-- .element class="fragment" data-fragment-index="0" -->

---

### Inheritance

A common object-oriented pattern is *inheritance*.

```typescript
class Point {
    constructor(protected x: number, protected y: number) { }
    distance(other: Point) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) +
            Math.pow(this.y - other.y, 2));
    }
}
```

```typescript
class Point3D extends Point {
    constructor(x: number, y: number, protected z: number) {
        super(x, y);
    }

    distance(other: Point) {
        const distance2D = super.distance(other);
        if (other instanceof Point3D) {
            return Math.sqrt(Math.pow(distance2D, 2)
                + Math.pow(this.z - other.z, 2));
        } else {
            return distance2D;
        }
    }
}
```

---

### Access modifiers

TypeScript supports `private`, `protected` and `public`

```typescript
class Point3D {
    constructor(private x: number, protected y: number, public z: number) { }
}

class Child extends Point3D {
    constructor(x: number, y: number, z: number) { super(x, y, z); }

    public getX() { return this.x; }
    // => Error: Property 'x' is private and only
    // accessible within class 'Point3D'
}

new Point3D(0, 0, 0).y;
// => Error Property 'y' is protected and only
// accessible within class 'Point3D' and its subclasses.
```

**Question:** How does this translate to JavaScript?

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Accessors

![es6](resources/es6.png) <!-- .element class="emblem" -->

TypeScript supports ES6's `get` and `set`.

```typescript
class Person {
    private _firstName: string;
    private _lastName: string;

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set firstName(value: string) {
        this._firstName = value;
    }
    set lastName(value: string) {
        this._lastName = value;
    }
}
```

```typescript
const p = new Person();
p.firstName = 'Albert';
p.lastName = 'Einstein';
p.fullName; // => Albert Einstein
```

---

### Static properties

![es6](resources/es6.png) <!-- .element class="emblem" -->

Use the `static` keyword to create properties belonging to the class itself, not instances of the class.

```typescript
class Point {
    constructor(public x: number, public y: number) {
        Point.origin; // => OK
        this.origin;
        // => error! Property 'origin' does not exist on type 'Point'.
    }

    static origin = new Point(0, 0);
    static parse(pointValues: { x: number, y: number }) {
        return new Point(pointValues.x, pointValues.y);
    }
}
Point.parse({ x: 3, y: -5});
```

---

### Readonly modifier

You can use the `readonly` keyword to make a property readonly and force initialization in constructor or declaration.

```typescript
class Person {
    static readonly favoriteDrink: 'beer';

    constructor(readonly birthDate: Date) { }
}

const p = new Person(new Date(1986, 4, 30));
p.birthDate = new Date(1993, 2, 4);
// => error! Cannot assign to 'birthDate' because it is a
//  constant or a read-only property.

Person.favoriteDrink = 'water';
// => error! Cannot assign to 'favoriteDrink' because it is a
//  constant or a read-only property.
```

---

### Strict property initialization

Since TS 2.7 <!-- .element class="corner-ribbon" -->

Tou can use `--strictPropertyInitialization` <br />
(only in combination with `--strictNullChecks`)

```typescript
class Person {
    name: string;

    constructor() { }
}
// => error: Property 'name' has no initializer and is not definitely assigned in the constructor.
```

All properties need to be initialized in the constructor.

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
class Person {
    name: string;

    constructor() {
        this.name = 'foobar';
     }
}
// => OK
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

#### Definite assignment assertion

Let us say we initialize a field outside of the constructor.

```typescript
class Person {
    name: string;

    constructor() { this.initializeName(); }

    initializeName() { this.name = ''; }
}
// => error: Property 'name' has no initializer and is not definitely assigned in the constructor.
```

To enable this, use the "definite assignment assertion" (`!`).

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
class Person {
    name!: string;
    //  ^ indicate that the name will be assigned

    constructor() { this.initializeName(); }

    initializeName() { this.name = ''; }
}
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Type association

A class can be used as an interface.

```typescript
class Point {
    constructor(public x: number, public y: number){}
}

interface Coordinated extends Point {
    z: number;
}

class OriginPoint implements Point {
    x = 0;
    y = 0;
}
```

**Question:** What happens here?

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Constructor functions

Defining a class does 2 things.

1. Create the *Constructor function* (or `class` in es6)
1. Create the type which describes the *shape* of the class.

```typescript
class Point {
    constructor(public x: number, public y: number){}
}
const PointCopy = Point;
```

<!-- .element class="fragment" data-fragment-index="0" -->

**Question:** What is the type of the PointCopy here?

<!-- .element class="fragment" data-fragment-index="0" -->
