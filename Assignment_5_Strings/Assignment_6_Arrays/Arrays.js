// 🚀 JavaScript Assignment 6: Arrays
// Author: Zakir Ullah

// ===========================
// Q1. Array Creation
// ===========================
// Create an array of 3 car brands. Log the array.
let arr1 = ["Honda", "Toyota", "Suzuki"];
console.log(arr1);

// ===========================
// Q2. Access Elements
// ===========================
// Create an array of fruits and log the first and last fruit.
let arr2 = ["Apple", "Banana", "Cherry"];
console.log(arr2[0], arr2[arr2.length - 1]);

// ===========================
// Q3. Array Length
// ===========================
// Make an array of 4 numbers. Log the number of items.
let arr3 = [1, 2, 3, 4];
console.log(arr3.length);

// ===========================
// Q4. Updating Arrays
// ===========================
// Create an array of colors. Change the second color to "Black".
let arr4 = ["White", "Grey", "Blue"];
arr4[1] = "Black";
console.log(arr4);

// ===========================
// Q5. push() Practice
// ===========================
// Start with ["Apple", "Banana"]. Add "Cherry" at the end.
let arr5 = ["Apple", "Banana"];
arr5.push("Cherry");
console.log(arr5);

// ===========================
// Q6. pop() Practice
// ===========================
// Remove the last fruit from your array and log the updated array.
arr5.pop();
console.log(arr5);

// ===========================
// Q7. unshift() Practice
// ===========================
// Add "Mango" at the beginning of your array.
arr5.unshift("Mango");
console.log(arr5);

// ===========================
// Q8. indexOf()
// ===========================
// Create an array of animals. Find the index of "Cat".
let arr6 = ["Dog", "Cat", "Horse"];
console.log(arr6.indexOf("Cat"));

// ===========================
// Q9. includes()
// ===========================
// Check if "Dog" exists in your animals array.
console.log(arr6.includes("Dog"));

// ===========================
// Q10. Mini Challenge
// ===========================
// Create an array of numbers: [10, 20, 30, 40, 50]
// Log:
// - First number
// - Last number
// - Length of the array
let arr7 = [10, 20, 30, 40, 50];
console.log(arr7[0]);
console.log(arr7[arr7.length - 1]);
console.log(arr7.length);
