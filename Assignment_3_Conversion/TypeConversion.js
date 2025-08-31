// 🚀 JavaScript Assignment 3: Type Conversion
// Author: [Zakir Ullah Khan]

// ===========================
// Q1. String to Number
// ===========================
let str1 = "123";
let num1 = Number(str1);
console.log(num1, typeof num1); // 123 "number"

// ===========================
// Q2. Number to String
// ===========================
let num2 = 500;
let str2 = String(num2);
console.log(str2, typeof str2); // "500" "string"

// ===========================
// Q3. Using .toString()
// ===========================
let num3 = 2025;
let str3 = num3.toString();
console.log(str3, typeof str3); // "2025" "string"

// ===========================
// Q4. Boolean Conversion
// ===========================
let bool1 = Boolean(0);
let bool2 = Boolean(1);
console.log(bool1, typeof bool1); // false "boolean"
console.log(bool2, typeof bool2); // true "boolean"

// ===========================
// Q5. Truthy / Falsy Check
// ===========================
let bool3 = Boolean("");
let bool4 = Boolean("hello");
console.log(bool3, typeof bool3); // false "boolean"
console.log(bool4, typeof bool4); // true "boolean"

// ===========================
// Q6. Automatic Conversion
// ===========================
console.log("10" + 5); // "105"
console.log("10" - 5); // 5
console.log("10" * 2); // 20

// ===========================
// Q7. NaN Practice
// ===========================
let badNum = Number("abc");
console.log(badNum, typeof badNum); // NaN "number"

// ===========================
// Q8. Boolean Numbers
// ===========================
let bool5 = Boolean(-7);
let bool6 = Boolean(100);
console.log(bool5, typeof bool5); // true "boolean"
console.log(bool6, typeof bool6); // true "boolean"

// ===========================
// Q9. String + Boolean
// ===========================
let result = "Logged in: " + true;
console.log(result, typeof result); // "Logged in: true" "string"

// ===========================
// Q10. Mini Challenge
// ===========================
let strNum = "42";
let num = 8;
let total = Number(strNum) + num;
console.log("The total is " + total); // "The total is 50"
