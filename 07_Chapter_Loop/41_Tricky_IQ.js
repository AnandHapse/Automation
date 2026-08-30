// Question:1: What is the output of the following code?

var sum = 0;
for (var i = 1; i <= 5; i++) {

    sum += i;
}
console.log(sum);

// output: 15

// because the sum is 0 and the loop is running from 1 to 5 and the sum is 0 + 1 + 2 + 3 + 4 + 5 = 15

// Question:2: What is the output of the following code?

let j = 0;
while (j < NaN) {
    j++;
}
console.log(j);

// output: 0

// because the j is 0 and the loop is running from 0 to NaN 
//It is not greater than, less than, or equal to any number (it is not even equal to itself: NaN === NaN is false).
//Therefore, any comparison condition with NaN like j < NaN will immediately evaluate to false, preventing the loop from ever executing.

// Question:3: What is the output of the following code?

let k = 3, count = 0;
do {
    count++;
} while (k-- > 0);
console.log(count + " " + k);

// output: 4 - 1
// "4" + " " + "-1" -> "4 -1"
// The post-decrement operator (k--) always decrements the variable, 
// even on the final check where the condition evaluates to false. That is why k ends up as -1 instead of 0.
