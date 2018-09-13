### Enums

An `enum` is a map of numeric values and string counter parts

```typescript
// TypeScript
enum MessageKind {Start, Run, Stop};
const message = MessageKind.Start;
```

```javascript
// JavaScript
var MessageKind;
(function (MessageKind) {
    MessageKind[MessageKind["Start"] = 0] = "Start";
    MessageKind[MessageKind["Run"] = 1] = "Run";
    MessageKind[MessageKind["Stop"] = 2] = "Stop";
})(MessageKind || (MessageKind = {}));
var message = MessageKind.Start;
```

**Challenge:** Can you explain the JavaScript to me?

<!-- .element class="fragment" data-fragment-index="0" -->

```javascript
MessageKind['Start']; // => 0
MessageKind[0]; // => 'Start'
```

<!-- .element class="fragment" data-fragment-index="1" -->

---

#### String enums

Since TS 2.4 <!-- .element class="corner-ribbon" -->

We can also use string enums

```typescript
// TypeScript
enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
```

```javascript
// JavaScript
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
```

**Question:** Why choose string enums over numeric enums?

<!-- .element class="fragment" data-fragment-index="0" -->

<!-- Because of javascript interop -->
