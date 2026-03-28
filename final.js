const readlineSync = require ("readline-sync");

//Final Project
//This section shows examples from: Values, Data Types, and Operations; Stringing Characters Together; Control Structures and Logic.
//Psuedocode: Store user's information

//Ask user for their name
let firstName = readlineSync.question("What is your first name? "); //Example of string data type. Values, Data Types, and Operations
let lastName = readlineSync.question("What is your last name? "); //Example of string data type.
//Ask user for their age
let age = readlineSync.questionInt("What is your age? "); //Example of Number data type. questionInt ensures input is a number.
console.log(`Hello, ${firstName} ${lastName}! Welcome to your personalized health journey!`); //Example of template literals to create a greeting message. Stringing Characters Together
console.log(`You are currently ${age} years old.`); //Example of template literals and using a variable in a string. Stringing Characters Together

//Psuedocode: Require password that is 8 characters long and contains a number.
let isValidPassword = false; //Example of boolean data type.
while (!isValidPassword) { //Example of a while loop that continues until the user creates a valid password.Control Structures and Logic
    let password = readlineSync.question("Please create a password that is at least 8 characters long and contains a number: ");
    let hasNumber = false; //Example of boolean data type.
    let hasLength = password.length >= 8; //Example of using the length property of a string to check if it meets the length requirement.
    for (let char of password) { //Example of a for...of loop to iterate through each character in the password string. Control Structures and Logic
        if (char >= "0" && char <= "9") { 
            hasNumber = true; 
        }
    }
    if (hasNumber && hasLength) { 
        isValidPassword = true;
        console.log("Password accepted!");
    } else {
        console.log("Password must contain at least one number and be at least 8 characters long. Please try again.");

    }
}

//This section shows examples from: Building Arrays and Using Arrays
//Psuedocode: Store user's health goals.
let healthyFoodChoices = ["Mediterranean Diet", "High Protein Diet", "Vegetarian Lifestyle", "Diabetic Friendly"]; //Example of an array. Building Arrays
healthyFoodChoices.push("Low Carb Diet"); //Example of using the push method to add an item to an array. Using Arrays
console.log(`Please choose which lifestyle best suits your health goals: ${healthyFoodChoices.join(", ")}`); //Example of using the join method to display array items in a string. Using Arrays
let userChoice = readlineSync.question("Enter your choice: ");
console.log("You chose the " + userChoice +  "! Great choice!"); //Example of string concatenation and using a variable in a string. Stringing Characters Together

//This section shows examples from: Creating and Using Objects.
//Psuedocode: Store user's health information in an object.
let userInfo = [ //Example of an array containing an object. Creating and Using Objects
    {
        firstName: firstName, //Example of an object property storing a variable value. Creating and Using Objects
        lastName: lastName, 
        age: age, 
        healthGoal: userChoice 
    }
]
console.log("User's First Name is: " + userInfo[0].firstName); //Example of accessing object properties using dot notation. Creating and Using Objects"
console.log("User's Health Goal is: " + userInfo[0]["healthGoal"]); //Example of accessing object properties using bracket notation. Creating and Using Objects