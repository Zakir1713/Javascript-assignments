// 🚀 JavaScript Assignment 4: Operations
// Author: Zakir Ullah Khan

// ===========================
// Q1. Addition
// ===========================
// Add 45 and 27. Log the result.
let a = 45;
let b = 27;
console.log(a + b);

// ===========================
// Q2. Subtraction
// ===========================
// Subtract 100 - 35. Log the result.
let c = 100;
let d = 35;
console.log(c - d);

// ===========================
// Q3. Multiplication
// ===========================
// Multiply 12 by 9. Log the result.
let e = 12;
let f = 9;
console.log(e * f);

// ===========================
// Q4. Division & Modulus
// ===========================
// Divide 55 by 6. Log both quotient and remainder.
let g = 55;
let h = 6;
console.log(g / h);  // Quotient
console.log(g % h);  // Remainder

// ===========================
// Q5. Exponentiation
// ===========================
// Find 3 raised to the power of 4. Log the result.
let i = 3;
let j = 4;
console.log(i ** j);

// ===========================
// Q6. Assignment Operator
// ===========================
// Let x = 20. Use += to add 10. Log the final value of x.
let x = 20;
x += 10;
console.log(x);

// ===========================
// Q7. Comparison Operator
// ===========================
// Compare 50 > 30 and 50 === "50". Log both results.
console.log(50 > 30);      // true
console.log(50 === "50");  // false (strict equality)

// ===========================
// Q8. Logical AND
// ===========================
// Let age = 19. Check if age is greater than 18 AND less than 25.
let age = 19;
console.log(age > 18 && age < 25);

// ===========================
// Q9. Logical OR
// ===========================
// Let isAdmin = false, score = 80. 
// Check if score > 90 OR isAdmin == true.
let isAdmin = false;
let score = 80;
console.log(score > 90 || isAdmin == true);

// ===========================
// Q10. Logical NOT
// ===========================
// Let isRainy = false. Use ! to flip its value.
let isRainy = false;
console.log(!isRainy);

// ===========================
// Q11. Mixed Operation
// ===========================
// Predict and log the result of: (10 + 5) * 2 - 8 / 4
console.log((10 + 5) * 2 - 8 / 4);

// ===========================
// Q12. Mini Challenge
// ===========================
// Variables: a = 15, b = 4
// Log exactly: "Sum: 19, Product: 60, Remainder: 3"
let k = 15;
let l = 4;
console.log("Sum: " + (k + l) + ", Product: " + (k * l) + ", Remainder: " + (k % l));

// ===========================
// Q13. Mini Challenge
// ===========================
// Variables: a = 10, b = 5, c = 2
// Log exactly: 
// "a is greater than b: true, b is greater than c: true, a is not equal to c: true"
let m = 10;
let n = 5;
let o = 2;
console.log(
  "a is greater than b: " + (m > n) + 
  ", b is greater than c: " + (n > o) + 
  ", a is not equal to c: " + (m != o)
);
