//show signout of if user has loggen in else show him the sign in page

var isLoggedIn = true;


if (isLoggedIn) {
    console.log("Welcome back! You are logged in.");
    console.log("Click here to sign out.");
} else {
    console.log("You are not logged in. Please sign in to continue.");
    console.log("Click here to sign in.");
}

//use ternary operator to show the same message

var message = isLoggedIn ? "Welcome back! You are logged in. Click here to sign out." : "You are not logged in. Please sign in to continue. Click here to sign in.";
console.log(message);

