
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        readline.question(question, answer => resolve(answer));
    });
}

(async function main() {
    // 1. Even or Odd Checker
    const num1 = parseInt(await ask("1. Enter a number to check Even or Odd: "));
    if (num1 % 2 === 0) console.log("Even");
    else console.log("Odd");

    // 2. Positive, Negative, or Zero
    const num2 = parseFloat(await ask("\n2. Enter a number to check if it's positive, negative, or zero: "));
    if (num2 > 0) console.log("Positive");
    else if (num2 < 0) console.log("Negative");
    else console.log("Zero");

    // 3. Age-based Eligibility
    const age = parseInt(await ask("\n3. Enter your age: "));
    if (age >= 18) console.log("Eligible to vote.");
    else console.log("Not eligible to vote.");

    // 4. Number Range Validator (10 to 20)
    const rangeNum = parseInt(await ask("\n4. Enter a number to check range (10–20): "));
    if (rangeNum >= 10 && rangeNum <= 20) console.log("In range");
    else console.log("Out of range");

    // 5. Check Number Equality
    const n1 = parseFloat(await ask("\n5. Enter first number: "));
    const n2 = parseFloat(await ask("Enter second number: "));
    if (n1 === n2) {
        console.log("Numbers are equal.");
    } else {
        console.log("Numbers are not equal.");
        console.log(`${n1 > n2 ? n1 : n2} is larger.`);
    }

    // 6. Simple Grading System
    const score = parseInt(await ask("\n6. Enter your score (0–100): "));
    if (score >= 90) console.log("Grade A");
    else if (score >= 75) console.log("Grade B");
    else if (score >= 50) console.log("Grade C");
    else console.log("Fail");

    // 7. Divisibility Checker (5 and 11)
    const divNum = parseInt(await ask("\n7. Enter a number to check divisibility by 5 and 11: "));
    if (divNum % 5 === 0 && divNum % 11 === 0) console.log("Divisible by both 5 and 11.");
    else console.log("Not divisible by both 5 and 11.");

    // 8. Find the Largest of Three Numbers
    const a = parseFloat(await ask("\n8. Enter first number: "));
    const b = parseFloat(await ask("Enter second number: "));
    const c = parseFloat(await ask("Enter third number: "));
    let largest;
    if (a >= b && a >= c) largest = a;
    else if (b >= a && b >= c) largest = b;
    else largest = c;
    console.log(`Largest number is: ${largest}`);

    // 9. Leap Year Validator
    const year = parseInt(await ask("\n9. Enter a year to check for leap year: "));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }

    // 10. Vowel or Consonant
    const char = (await ask("\n10. Enter a single alphabet character: ")).toLowerCase();
    if (char.length !== 1 || !/[a-z]/.test(char)) {
        console.log("Invalid input. Please enter a single alphabet letter.");
    } else if ("aeiou".includes(char)) {
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }

    readline.close();
}) ();
