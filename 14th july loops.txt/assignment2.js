// Q1-loop

// 1. Print numbers from 1 to 10 using a for loop
// console.log("Numbers from 1 to 10 using a for loop:");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log("\nNumbers from 10 down to 1 using a while loop:");
// 2. Print numbers from 10 down to 1 using a while loop
// let j = 10;
// while (j >= 1) {
//     console.log(j);
//     j--;
// }

// console.log("\nNumbers from 1 to 5 using a do...while loop:");
// 3. Print numbers from 1 to 5 using a do...while loop
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= 5);

// Q2-evenOddMultiples

// 1. Print all even numbers from 1 to 50
console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\nOdd numbers between 20 and 50:");
// 2. Print all odd numbers between 20 and 50
for (let i = 21; i < 50; i += 2) {
    console.log(i);
}

console.log("\nNumbers divisible by 3 from 1 to 30:");
// 3. Print all numbers divisible by 3 from 1 to 30
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Q3-summationProduct

// 1. Find the sum of numbers from 1 to 100
let sum1To100 = 0;
for (let i = 1; i <= 100; i++) {
    sum1To100 += i;
}
console.log("Sum of numbers from 1 to 100:", sum1To100);

// 2. Find the product of numbers from 1 to 10
let product1To10 = 1;
for (let i = 1; i <= 10; i++) {
    product1To10 *= i;
}
console.log("Product of numbers from 1 to 10:", product1To10);

// 3. Find the sum of all even numbers between 1 and 50
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
    evenSum += i;
}
console.log("Sum of even numbers from 1 to 50:", evenSum);

// 4. Find the sum of squares of numbers from 1 to 10
let sumOfSquares = 0;
for (let i = 1; i <= 10; i++) {
    sumOfSquares += i * i;
}
console.log("Sum of squares from 1 to 10:", sumOfSquares);

// Q4-conditionalsInLoops

// 1. Print numbers from 1 to 20, skip multiples of 4 using continue
console.log("Numbers from 1 to 20 (skip multiples of 4):");
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

console.log("\nNumbers from 1 to 10 (stop at 7 using break):");
// 2. Print numbers from 1 to 10, stop at 7 using break
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

console.log("\nCount of numbers between 1 and 100 divisible by both 3 and 5:");
// 3. Count how many numbers between 1 and 100 are divisible by both 3 and 5
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        count++;
    }
}
console.log("Count:", count);

// Q5-nestedLoops

// 1. Print all pairs (i, j) where i and j go from 1 to 3
console.log("All pairs (i, j) where i and j go from 1 to 3:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`(${i}, ${j})`);
    }
}

console.log("\nAll combinations (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4):");
// 2. Find all combinations (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4)
for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a + b === 5) {
            console.log(`(${a}, ${b})`);
        }
    }
}

// Q6-logic-based Tasks
const input = 121;


// 1. Check if a given number is a prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(`${input} is ${isPrime(input) ? "a prime" : "not a prime"} number.`);

// 2. Print the factorial of a number
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(`Factorial of ${input} is ${factorial(input)}.`);

// 3. Print the reverse of a number using a loop
function reverseNumber(num) {
    let reversed = 0;
    let original = num;
    while (original > 0) {
        let digit = original % 10;
        reversed = reversed * 10 + digit;
        original = Math.floor(original / 10);
    }
    return reversed;
}
console.log(`Reverse of ${input} is ${reverseNumber(input)}.`);

// 4. Count the number of digits in a given number
function countDigits(num) {
    let count = 0;
    let temp = num;
    do {
        count++;
        temp = Math.floor(temp / 10);
    } while (temp > 0);
    return count;
}
console.log(`Number of digits in ${input} is ${countDigits(input)}.`);

// 5. Check if a number is a palindrome using only number operations
function isPalindrome(num) {
    return num === reverseNumber(num);
}
console.log(`${input} is ${isPalindrome(input) ? "" : "not "}a palindrome.`);

 