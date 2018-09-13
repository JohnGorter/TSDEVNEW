## Async & Await

Typescript introduces the `async` and `await` keywords.
This allows you to write synchronous code that will run asynchronously.

```typescript
function callServer() {
    return new Promise<string>(resolve => {
        //Call server.
    });
}

async function getDataFromServerAndPrint() {
    let res = await callServer();

    console.log(res.data);

    return res;
}
```
