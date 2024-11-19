# JavaScript Promises, Async/Await, and Error Handling Project

## Introduction

This project focuses on the core concepts of asynchronous JavaScript programming using Promises, async/await, and error handling techniques with try/catch and throw statements. Understanding these concepts is crucial for building scalable, non-blocking web applications that perform asynchronous operations seamlessly.

## Learning Objectives

By the end of this project, you should be able to:

- Understand what Promises are, why they are used, and how they work.
- Use `.then()`, `.resolve()`, and `.catch()` methods to handle Promises.
- Utilize all available methods of the Promise object for asynchronous operations.
- Handle errors effectively using `throw` and `try/catch` blocks.
- Understand and use the `await` operator to pause the execution of asynchronous functions.
- Create and use `async` functions for cleaner asynchronous code handling.

## Resources

### Recommended Reading and References

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Requirements

### General

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using Node.js version 20.x.x and npm version 9.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All your files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- All of your functions must be exported.

## Project Content

### Promises

- How Promises work in JavaScript and why they are useful.
- Examples of creating and using Promises to handle asynchronous code.

### Methods of the Promise Object

- `.then()`
- `.catch()`
- `.finally()`
- `Promise.resolve()`
- `Promise.reject()`
- `Promise.all()`
- `Promise.race()`
- `Promise.allSettled()`
- `Promise.any()`

### Async/Await

- Using `async` functions to simplify asynchronous code.
- Understanding how `await` pauses code execution until the Promise is resolved or rejected.

### Error Handling

- Using `throw` to trigger errors.
- Handling errors gracefully with `try/catch` blocks in both synchronous and asynchronous code.

## Example Code

### Basic Promise Example

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

### Async/Await

#### Using `async` Functions

- The `async` keyword is used to define an asynchronous function that returns a Promise.
- When a function is declared with `async`, it implicitly wraps its return value in a Promise.
- Example:

  ```javascript
  async function exampleFunction() {
    return "Hello, Async!";
  }

  exampleFunction().then(console.log); // Output: Hello, Async!
  ```

### The await Operator

await is used within an async function to pause the execution until a Promise is resolved or rejected.

It allows asynchronous code to look and behave more like synchronous code, improving readability and reducing complexity.

Example:

```javascript
sync function fetchData() {
try {
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
} catch (error) {
console.error('Error fetching data:', error);
}
}

fetchData();
```

### Important Notes:

await can only be used inside async functions.
It pauses the function execution until the Promise settles (resolves or rejects).
Error Handling with throw and try/catch
Using throw to Trigger Errors
The throw statement is used to create a custom error.
Example:

```javascript
function validateInput(input) {
  if (!input) {
    throw new Error("Invalid input!");
  }
  return input;
}

try {
  validateInput("");
} catch (error) {
  console.error("Caught error:", error.message);
}
```

### Handling Errors with try/catch

try/catch blocks allow you to catch and handle errors gracefully.

This mechanism works for both synchronous and asynchronous code (when used with await).

Example:

```javascript
async function exampleFunction() {
  try {
    const result = await someAsyncOperation();
    console.log("Result:", result);
  } catch (error) {
    console.error("Error caught:", error);
  }
}

exampleFunction();
```

### Benefits:

Provides a cleaner way to handle errors without deeply nested callbacks.
Improves code readability, especially when handling asynchronous operations.

### Testing and Linting

Your code will be tested using Jest, a JavaScript testing framework. Run tests with the command:

```bash
npm run test
Your code will also be verified for linting errors using ESLint to ensure code quality and consistency.
```
