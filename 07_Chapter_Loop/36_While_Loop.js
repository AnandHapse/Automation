// let i = 0;                   // For Loop
// for (; i < 10; i++) {
//     console.log(i);
// }

let j = 0;
while (j < 10) {
    console.log(j);
    j++;                   // While Loop we can't use increment operator in the condition.
}

let attempts = 0; // Init

while (attempts < 3) {
    console.log("Attempt", attempts);
    attempts++;
}