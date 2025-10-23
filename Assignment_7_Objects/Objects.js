// 🚀 JavaScript Assignment 7: Objects
// Author: Zakir Ullah

// ===========================
// Q1. Basic Object Creation
// ===========================
// Create an object user with properties: username, age, and country.
// Log the entire object.

const user = {
    username: "Zakir Ullah",
    age: 23,
    country: "Pakistan"
};
console.log(user);

// ===========================
// Q2. Symbol as a Key
// ===========================
// Create a Symbol "userId" and use it as a property key inside the user object.
// Log the Symbol value from the object.

const userId = Symbol("userId");
user[userId] = "12345";
console.log(user[userId]);

// ===========================
// Q3. Accessing Properties
// ===========================
// Access and log one property using dot notation and one using bracket notation.

console.log(user.username);     // Dot notation
console.log(user["age"]);       // Bracket notation

// ===========================
// Q4. Update Property
// ===========================
// Update the age of the user and log the updated object.

user.age = 24;
console.log(user);

// ===========================
// Q5. Add and Delete Properties
// ===========================
// Add a property isLoggedIn = true to the object, then delete the country property.

user.isLoggedIn = true;
console.log(user);

delete user.country;
console.log(user);

// ===========================
// Q6. Freeze the Object
// ===========================
// Use Object.freeze() on the user object, try changing a value, and check if it changes.

Object.freeze(user);
user.age = 30; // This won't change because user is frozen.
console.log(user.age);

// ===========================
// Q7. Add Methods to Object
// ===========================
// Add a method greet() that logs "Hello, [username]!".
// Call the method.

const user2 = {
    username: "Zakir Ullah",
    age: 23,
    greet: function () {
        console.log(`Hello, ${this.username}!`);
    }
};
user2.greet();

// ===========================
// Q8. Nested Object
// ===========================
// Create an object student with a nested object details having email and phone.
// Log the phone number.

const student = {
    name: "Zakir Ullah",
    age: 23,
    details: {
        email: "zakirullah@gmail.com",
        phone: "+923219876543"
    }
};
console.log(student.details.phone);

// ===========================
// Q9. Merge Objects
// ===========================
// Create two objects obj1 = {a:1} and obj2 = {b:2} and merge them using:
// 1) Object.assign()
// 2) Spread operator (...)
// Log the results.

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged1 = Object.assign({}, obj1, obj2);
console.log(merged1);

const merged2 = { ...obj1, ...obj2 };
console.log(merged2);

// ===========================
// Q10. Array of Objects
// ===========================
// Create an array users with 3 objects, each having id and email.
// Log the email of the second user.

const users = [
    { id: 1, email: "user1@gmail.com" },
    { id: 2, email: "user2@gmail.com" },
    { id: 3, email: "user3@gmail.com" }
];
console.log(users[1].email);

// ===========================
// Q11. Object Utility Methods
// ===========================
// Create an object product with three properties.
// Log: keys, values, and entries of the object using Object.keys(), Object.values(), Object.entries().

const product = {
    name: "PC",
    id: 101,
    price: 1290
};

console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));

// ===========================
// Q12. hasOwnProperty()
// ===========================
// Check if product has the property "price" using .hasOwnProperty().

console.log(product.hasOwnProperty("price"));

// ===========================
// Q13. Object Destructuring
// ===========================
// Create an object course = {title:"JS Mastery", instructor:"John", price:500}
// Use destructuring to extract instructor into a variable called teacher and log it.

const course = {
    title: "JS Mastery",
    instructor: "John",
    price: 500
};
const { instructor: teacher } = course;
console.log(teacher);

// 🎯 Bonus Challenge
// Create an object car with brand, model, and a method start() using `this`.
// When start() is called, it should log: "My [brand] [model] is starting..."

const car = {
    brand: "Honda",
    model: "Civic",
    start: function () {
        console.log(`My ${this.brand} ${this.model} is starting...`);
    }
};

car.start();
