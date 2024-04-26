Opening src/index.html in Safari works as expected, “success!” should be appended to the page.

Running `npm run tauri dev` will does not work as expected, inspect the page and see the console for the error (SyntaxError: Unexpected token '{'. import call expects exactly one argument.).