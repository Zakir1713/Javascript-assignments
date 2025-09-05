// 🚀 JavaScript Assignment 5: Strings & String Methods
// Author: Zakir Ullah Khan

// ===========================
// Q1. String Length
// ===========================
// Store a string "Learning JavaScript" and log its length.

let str1 = "Learning JavaScript";
console.log(str1.length); // 19


// ===========================
// Q2. Uppercase Conversion
// ===========================
// Convert "frontend" to uppercase and log it.

let str2 = "frontend";
console.log(str2.toUpperCase()); // FRONTEND


// ===========================
// Q3. Lowercase Conversion
// ===========================
// Convert "BACKEND" to lowercase and log it.

let str3 = "BACKEND";
console.log(str3.toLowerCase()); // backend


// ===========================
// Q4. Template Literals
// ===========================
// Use template literals to print: "My favorite language is JavaScript!"

let str4 = "JavaScript";
console.log(`My favorite language is ${str4}.`);


// ===========================
// Q5. String Concatenation
// ===========================
// Concatenate two variables: "Hello" and "World"

let str5 = "Hello";
let str6 = "World";
console.log(str5 + " " + str6); // Hello World


// ===========================
// Q6. Slice a String
// ===========================
// Slice "Programming" to print "gram".

let str7 = "Programming";
console.log(str7.slice(3, 7)); // gram


// ===========================
// Q7. Trim Spaces
// ===========================
// Trim spaces from "   Full Stack Developer   "

let str8 = "   Full Stack Developer   ";
console.log(str8.trim()); // Full Stack Developer


// ===========================
// Q8. Includes Check
// ===========================
// Find if "JS" exists in "I love JS"

let str9 = "I love JS";
console.log(str9.includes("JS")); // true


// ===========================
// Q9. Replace Word
// ===========================
// Replace "morning" with "evening" in "Good morning"

let str10 = "Good morning";
console.log(str10.replace("morning", "evening")); // Good evening


// ===========================
// Q10. Character at Index
// ===========================
// Get the character at index 3 of "Laptop"

let str11 = "Laptop";
console.log(str11.charAt(3)); // t


// ===========================
// Q11. Includes Check
// ===========================
// Check if "apple" includes "pp"

let str12 = "apple";
console.log(str12.includes("pp")); // true


// ===========================
// Q12. Last Character
// ===========================
// Write a string with your name and find the last character

let str13 = "Zakir Ullah";
console.log(str13.at(-1)); // h
