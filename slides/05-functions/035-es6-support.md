### Spread operator

![es6](resources/es6.png)<!-- .element class="emblem"  -->

```typescript
function max(numbers: number[]){
    return Math.max(...numbers);
}
```

---

### Object matching

![es6](resources/es6.png)<!-- .element class="emblem"  -->

```typescript
function print({name: theName, age: theAge}: any){
    console.log(`${theName} is ${theAge}`);
}
print({name: 'Obiwan', age: 68});

function han(){
    return {
        name: 'Han Solo'
    }
}
const { name: hansName } = han();
hansName // => 'Han Solo'
```

---

![es6](resources/es6.png)<!-- .element class="emblem"  -->

### Array Matching

```typescript
const list = [ 1, 2, 3 ];
const [ a, , b ] = list;
a // => 1
b // => 3
```

---

### Even more

[http://es6-features.org/](http://es6-features.org/) <!-- .element target="_blank" -->
