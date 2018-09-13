# Lab 12 - TypeSafe HTML

In this lab, we will change the index page to be dynamically generated from TypeScript.

## Preparation

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* directory.

Make sure both the client side code and server side code is being watched and compiled.

## Exercise 1 - use TypedHtml

1. Install typed-html: `npm i -S typed-html`
1. Configure your server tsc compiler for JSX support. Add the following configuration:
    ```json
    {
        "jsx": "react",
        "jsxFactory": "typedHtml.createElement"
    }
    ```
1. Create a file responsible for building the index page: `src/server/html.tsx`. In that file, import typedHtml `import * as typedHtml from 'typed-html';`
1. Try it out. You should be able to use html tags in that file.

## Exercise 2 - replace index.html

Replace the index.html page with dynamic html created from the server.

1. Create a method `index(bankConfig: BankConfig)` in the 'html.tsx' file. For now, just return a basic html file:
    ```typescript
    return <html>
        <head>
            <title>{bankConfig.name}</title>
        </head>
        <body>
            <h1>{bankConfig.name}</h1>
        </body>
    </html>;
    ```
1. In the BankServer, add a request handler to the server. The code might look something like this:
    ```typescript
    app.use('', (req, res, next) => {
        if (req.path === '/') {
            res.end(html.index(this.bank.config))
        } else {
            next();
        }
    });
    ```
1. Test to see if the request handler works. Browsing to http://localhost:25647/ should present the new index page.
1. Now copy over the content of the index.html file. Fix any issues. _Hint:_: Be creative, it doesn't have to be one big blob of html, try to split things into helper functions.
