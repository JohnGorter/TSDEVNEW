## Integrate with vscode

![vscode](resources/vscode.png) <!-- .element class="smaller-logo" -->

Setup

1. Run the compiler in watch mode
1. Show problems
1. Run your application
1. Debug your application

---

###  Run the compiler in watch mode

Run the compiler continuously in watch mode.

1. Open your project in vscode
    * Can be done from the command line using `code .`
1. Remove the "HelloWorld.js" file.
1. Hit **ctrl+shift+b** (run build task)
1. Now choose "tsc: watch - tsconfig.json"
1. Confirm that the "HelloWorld.js" file is generated

You're done. The compiler now runs continuously in the background.

---

### Show problems

Let's see how problems might look in vscode

1. Open "HelloWorld.ts"
1. Add an error to the file, save the file
1. Open the "Problems" using pane using **ctrl+shift+m**,
or by clicking on ![TypeScript problem status bar](/resources/typescript_problemstatusbar.png) <!-- .element class="img-in-text"-->
in the status bar
1. Confirm that the problem can be found and you can click on the link.

---

### Run your application

Run your application using vscode

1. Press **F1** and select "Debug: open launch.json"
1. Inspect the newly created ".vscode/launch.json" file
1. Alter the first object in the `"configurations"` array
    * Change `"program": "..."` to<br /> `"program": "${workspaceRoot}/HelloWorld.js"`
1. Press **F5** again
1. Confirm that you see the text "Hello world" in the console below

You can now use **F5** for debugging and **ctrl+F5** for running your application.

---

### Debug your application

1. Alter the file ".vscode/launch.json".
    * Set `"sourceMaps"` to `true`
1. Alter the file "tsconfig.json"
    * Set `"sourceMap"` to `true`
1. Open "HelloWorld.ts". Set a breakpoint <br />
![breakpoint example](resources/typescript-breakpoint.png) <!-- .element class="pin-height-100" -->
1. Press **F5**. Confirm that it breaks on the breakpoint.
1. Try out the debugging tools
    * Watch variables, step over, step into, etc

---

### Congratulations!

You now configured vscode to use TypeScript

<i class="fa fa-birthday-cake icon-big" aria-hidden="true"></i>

* Compile with **Ctrl+Shift+B**
* Show problems with **Ctrl+Shift+M**
* Run with **Ctrl+F5**
* Debug with **F5**

