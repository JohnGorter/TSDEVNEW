# Lab 8 - Client side bank

## Preparation

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* directory.

## Exercise 1 - Quality improvements

1. Enable all quality compiler options as shown in the slides.
1. Fix any compiler error you might have. Make sure your code still works.

## Exercise 2 - Create and serve an index.html file

In this exercise we'll let our webserver also serve static files. We will load an html page in a browser which will function as our banking application.

1. Create a new `src/static` directory, add an index.html file.
1. Add the following content:
	```html
	<html>

	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
			crossorigin="anonymous">
	</head>

	<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Bank accounts</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Add Bank account</h2>
            </div class="col-md-12">
        </div>
        <div class="row">
            <div class="col-md-12">
                <form class="form" name="customer">
                    <div class="form-group">
                        <label for="nameInput">First name</label>
                        <input id="nameInput" name="firstName" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="nameInput">Last name</label>
                        <input id="nameInput" name="lastName" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="nameInput">Preposition</label>
                        <input id="nameInput" name="preposition" type="text" class="form-control">
                    </div>
                    <button type="button" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i></button>
                </form>
            </div>
        </div>
    </div>
    <template>
        <tr>
            <td class="account"></td>
            <td class="name"></td>
        </tr>
    </template>
	</body>
	</html>
	```
1. Alter your `src/server/BankServer.ts` file. Make sure it can serve files from your `static` directory. Tip: it should only take you 1 line of code.
1. Run your webserver. Open a browser and go to the correct address. For example if your bank serves from 25647, go to http://localhost:25647. The index.html file should be visible in your browser.

## Exercise 3 - Setup client code

In this exercise we'll add a second tsconfig.json file, this is for our client application. We want to use `modules` to structure our code, so we need to choose a *module loader*. We'll choose [SystemJS](https://github.com/systemjs/systemjs) for this exercise. It has the advantages of running entirely client side (no special build step required) and we'll be able able to package all client side code in one output file.

1. Create a `client` directory in the `src` directory.
1. Add a file "client.ts". Add a `console.log('hello world')` to test your setup. Also make sure it is treated as a `module`. You can do this by adding an `import` : `import { BankAccount } from '../shared/BankAccount';`
1. Add a tsconfig.json file to the directory. This tsconfig.json is responsible for compiling our client code.
    * Choose `'system'` as your module syntax.
    * Choose '../static/client-bundle.js' as your single output file.
    * We want to use the dom inside our client code. Add the lib for `"es5"`, `"dom"` and `"es2015.promise"`.
1. Open a new command prompt and cd into the root of your project. Run tsc with the new tsconfig json file.
    * `./node_modules/.bin/tsc -w -p src/client`
    * You should now see a "client-bundle.js" file in your "static" directory.
        * It should also contain a call to register the 'client/client' module: `System.register("client/client", ...`.
1. Now we need to add SystemJS, client.js and glue to our client.js to our index.html file. Open up the file and add these lines of code *just before the `</body>`*:
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.12/system-production.js"></script>
    <script src="client-bundle.js"></script>
    <script>
        SystemJS.import('client/client');
    </script>
    ```
1. Test your setup by refreshing the browser. You should see 'hello world' printed to the console.

## (if time permits) Exercise 4: Debug typescript code client side

We can now run our TypeScript code in the browser. Awesome. However we cannot debug it our typescript code (only or JS code).

1. Inspect the client-bundle.js.map file. This file should be served from your website: http://localhost:25647/client-bundle.js.map
1. It should define sources like:
    ```json
    "sources":[
        "../shared/Customer.ts",
        "../shared/AccountNumber.ts",
        "../shared/BankAccount.ts",
        "../client/client.ts"
    ]
    ```
    These files are not served from your webserver. Alter your `BankServer` code so the `shared` and `client` directories are served under `/shared` and `/client` respectively.
1. If you did this correctly, you should now be able to debug typescript code from your browser.
