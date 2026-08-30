what is loop?
Loop basically means a task that you want to do multiple times, or a simple task that you want to have repeated in.

# For Loop

# For Loop = use when you know, how many times to run i.e.. 50
# While Loop = use when iteration depends on the conditions, not a count.
# Do While Loop = use when the action must run atleast once before the condition is checked.
## For ( I, C, U)
I - Init /  -  initialization 

C - Condition

U - Updation - You can use whichever you want pre or post, (we are using the the variable in the next) , // i++,++i



`for(let i=0; i<10; i++) { 

console.log(i)

} 



---

# WHILE LOOP
 while is generally used when you want to have a condition as the main 

// While Loop - Sister (For)
// I,C,U



```
let attempt = 0; // Init - 1

while(attempt < 3) { // Condition - 2
console.log(attempt);
attempt++; // UPDATION - 3
}
```
# do while loop
> retrying a flaky action at least once
// if condition fails it run atleas once 

 will always execute at least one time

---

> For , 

>  For of, For in, ForEach ->  They will come when we use the Array!

---

> For loop, with the For loop- Matrix



---

**Q1. [Easy]** Which loop is guaranteed to execute its body **at least once**, even when its condition is initially false?

- (A) `for` 
- (B) `while` 
- (C) `do…while`            //
- (D) All three


**Q2. [Easy]** What is the output?

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```
- (A) 0 1 2                 //
- (B) 1 2 3
- (C) 0 1 2 3
- (D) 1 2


**Q3. [Easy]** What is the output?

```js
let i = 0;
while (i < 5) {
  i++;
}
console.log(i);
```
- (A) 4
- (B) 5             // if the console.log out side the cond then it will run all 
- (C) 0
- (D) Infinite loop


---

**Q4. [Easy]** What is the output?

```js
let i = 10;
do {
  console.log(i);
} while (i < 5);
```
- **(A) Prints 10**             // run console.log which give Prints 10
-  (B) Prints nothing
-  (C) Prints 10 five times
-  (D) Infinite loop


**Q5. [Easy]** What is the output?

```js
let count = 0;
for (let i = 5; i < 5; i++) {
  count++;
}
console.log(count);
```
- (A) 0                     // no effect if increement count++ because it is 0
- (B) 5
- (C) 1
- (D) Infinite loop
