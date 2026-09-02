// > Arrays are ordered collections of values. 
// > `typeof []`  is `"object"`  -> use `Array.isArray()`  to check.
// > An ordered, zero-indexed, **mutable** collection.
// > Arrays are **not** a primitive type.

let fruit = [];
let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);
console.log(fruit.length);

// For the Negative indexedDB, use the at
console.log(browsers[-1]); // undefined
console.log(browsers.at(0));

let arr = [10, 20, 30, 40];
console.log(arr.length);
// 0 to 3
console.log(arr[4]); // undefined


let testResults = ["pass", "fail", "pass", "skip"]; //
let mixed = [1, "hello", true, null]; // mixed array
let empty = []; // empty array
let single = [1]; // single element array
let multi = [1, [2, 3], 4]; // multi-dimensional array
let multi = [1, [2, 3], 4]; // multi-dimensional array