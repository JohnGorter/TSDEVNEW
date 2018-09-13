## Metadata

`reflect-metadata` is a library which can be used to emit metadata for declarations that have a decorator.

we need to install `reflect-metadata` and turn on the compiler option.

```bash
npm install reflect-metadata
```

```json
// tsconfig.json

{
    "compilerOptions": {
        "emitDecoratorMetadata": true
    }
}
```

For example emit metadata for typings.

---

## Use case

Within Angular, they are mostly uses  reflection.

```typescript
@Component({
  selector: 'my-app',
  template: `<h1>My application</h1>`
})
class MyAppComponent { }
```

```typescript
console.log(Reflect.getOwnMetadata('annotations', AppComponent)[0].selector);
// 'my-app'
```
