let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3 return index of the last occurrence of the value


// question 1: what is the Output?

const arr = [1, 2, 3];
console.log(arr.push(4)); // 4 return the new length of the array
// [ 1, 2, 3, 4 ]  (answer)

// question 2: what is the Output?

console.log([10, 9, 1, 2].sort()); // [ 1, 10, 2, 9 ] (answer)