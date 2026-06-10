//falsy use cases

var userInput = ""; // This is an empty string, which is falsy

if (userInput) {
    console.log("User input is valid: " + userInput);
} else {
    console.log("User input is invalid. Please enter a value.");
}

var age = 0; // This is zero, which is falsy

if (age) {
    console.log("Age is valid: " + age);
} else {
    console.log("Age is invalid. Please enter a valid age.");
}

var isMember = false; // This is false, which is falsy

if (isMember) {
    console.log("Welcome, member! You have access to exclusive content.");
} else {
    console.log("You are not a member. Please sign up to access exclusive content.");
}

var score = null; // This is null, which is falsy

if (score) {
    console.log("Your score is: " + score);
} else {
    console.log("Score is not available. Please try again later.");
}

var username; // This is undefined, which is falsy

if (username) {
    console.log("Username: " + username);
} else {
    console.log("Username is not defined. Please enter your username.");
}   

//coercion example

var value = "0"; // This is a string, which is truthy

if (value) {
    console.log("Value is truthy: " + value);
} else {
    console.log("Value is falsy.");
}

