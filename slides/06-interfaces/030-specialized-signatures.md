### Overloading

In JavaScript, functions can be very dynamic

```javascript
jQuery.get( url [, data ] [, success ] [, dataType ] )
jQuery.get( [settings ] )
```

In order to model this behavior, methods can be _overloaded_

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
interface SuccessHandler {
    (data: any, textStatus: string, jqXHR: JQueryXHR): any;
}

interface JQuery {
    get(url: string, success?: SuccessHandler, dataType?: string): JQueryXHR;
    get(url: string, data?: Object,
        success?: SuccessHandler, dataType?: string): JQueryXHR;
    get(settings : JQueryAjaxSettings): JQueryXHR;
}
```

<!-- .element class="fragment" data-fragment-index="0" -->

![specialized-signature-intellisense](resources/specialized-overloading-intellisense.png)

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Overload using literal types

You can combine specialized overloading using literal types.

```javascript
const canvas = document.createElement('canvas');
const div = document.createElement('div');
```

```typescript
interface Document {
    createElement(tagName: 'div'): HTMLDivElement;
    createElement(tagName: 'canvas'): HTMLCanvasElement;
    createElement(tagName: string): HTMLElement;
}

const document: Document = window.document;
const div = document.createElement('div');
const canvas = document.createElement('canvas');
canvas.getContext('2d').fillText('foobar', 20, 30);
div.getContext('2d');
// =>  Error: Property 'getContext' does not exist on type 'HTMLDivElement'.
```
<!-- .element class="fragment" data-fragment-index="0" -->
