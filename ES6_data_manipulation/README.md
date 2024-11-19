# JavaScript Arrays, Typed Arrays, and Data Structures Project

## Introduction

This project explores advanced JavaScript data structures and array methods. You'll learn how to manipulate arrays using higher-order functions like `map`, `filter`, and `reduce`, work with typed arrays for handling binary data, and use data structures like `Set`, `Map`, and `WeakMap` for efficient data storage and access.

## Learning Objectives

By the end of this project, you should be able to:

- Use `map`, `filter`, and `reduce` on arrays to perform common data manipulation tasks.
- Understand and work with typed arrays for handling binary data.
- Utilize the `Set` data structure to store unique values.
- Use the `Map` data structure for key-value pairs with complex keys.
- Work with `WeakMap` and understand its use cases.

## Resources

### Recommended Reading and References

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Requirements

### General

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using Node.js version 20.x.x and npm version 9.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All your files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- Your code needs to pass all the tests and lint. You can verify the entire project by running:
  ```bash
  npm run full-test
  ```

## Project Content

### 1. Array Methods: `map`, `filter`, and `reduce`

#### `map()`

- Used to transform elements in an array and return a new array.
- Example:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]
  ```

#### `filter()`

- Creates a new array with elements that match a condition.
- Example:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  ```

#### `reduce()`

- Reduces an array to a single value by applying a function on each element.
- Example:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 10
  ```

### 2. Typed Arrays

- Typed arrays allow you to work with binary data directly, providing arrays of fixed-length and specific data types.
- Example:
  ```javascript
  const buffer = new ArrayBuffer(16);
  const int32View = new Int32Array(buffer);
  int32View[0] = 42;
  console.log(int32View[0]); // Output: 42
  ```

### 3. Data Structures: `Set`, `Map`, and `WeakMap`

#### `Set`

- A collection of unique values. Useful for storing unique elements.
- Example:
  ```javascript
  const uniqueNumbers = new Set([1, 2, 3, 3]);
  console.log(uniqueNumbers); // Output: Set { 1, 2, 3 }
  ```

#### `Map`

- A collection of key-value pairs where keys can be any data type.
- Example:
  ```javascript
  const map = new Map();
  map.set("key1", "value1");
  map.set(42, "value2");
  console.log(map.get(42)); // Output: value2
  ```

#### `WeakMap`

- A collection of key-value pairs where keys are objects and values can be garbage-collected.
- Example:
  ```javascript
  let obj = {};
  const weakMap = new WeakMap();
  weakMap.set(obj, "value");
  console.log(weakMap.get(obj)); // Output: value
  ```
