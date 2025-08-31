// 🚀 JavaScript Assignment 1: Basics
// Solutions by Zakir Ullah Khan

// ===========================
// Q1. Personal Info Variables
// ===========================
const fullName = "Zakir Ullah Khan";
let age = 23;
const favoriteColor = "Blue";
let isStudent = true;

console.log(fullName, age, favoriteColor, isStudent);

// ===========================
// Q2. Swap Values
// ===========================
let a = 5;
let b = 10;
let temp = 0;

temp = a;
a = b;
b = temp;

console.log("a is " + a);
console.log("b is " + b);
console.log("temp is " + temp);

// ===========================
// Q3. Simple Math
// ===========================
let x = 20;
let y = 10;

console.log("Sum of x and y is " + (x + y));
console.log("Difference of x and y is " + (x - y));
console.log("Product of x and y is " + (x * y));
console.log("Quotient of x and y is " + (x / y));

// ===========================
// Q4. String Concatenation
// ===========================
let firstName = "Zakir";
let lastName = "Ullah";
let fullNameCombined = firstName + " " + lastName;

console.log(fullNameCombined);

// ===========================
// Q5. Template Literals
// ===========================
let myName = "Zakir Ullah";
let myAge = 23;

console.log(`Hello, my name is ${myName}. I am ${myAge} years old.`);

// ===========================
// Q6. Constants vs Variables
// ===========================
const birthYear = 2002;
let currentYear = 2025;
let calculatedAge = currentYear - birthYear;

console.log(`I was born in ${birthYear}. And I am ${calculatedAge} years old.`);

// ===========================
// Q7. Type Checking
// ===========================
let str = "Hello World";
let num = 23;
let bool = true;

console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean

// ===========================
// Q8. Reassignment Practice
// ===========================
let city = "Karachi";
console.log("Original city:", city);

city = "Lahore";
console.log("Reassigned city:", city);

// ===========================
// Q9. Undefined & Null
// ===========================
let q;
console.log(q); // undefined

let w = null;
console.log(w); // null

// ===========================
// Q10. Mini Challenge
// ===========================
let introName = "Zakir Ullah";
let introAge = 23;
let introColor = "Blue";

console.log(`Hi, my name is ${introName}. I am ${introAge} years old. My favorite color is ${introColor}.`);
