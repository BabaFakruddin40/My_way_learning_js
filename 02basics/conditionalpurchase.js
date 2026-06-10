//Allow purchase only if the user has a credit card on file, verfiy user,userloggedin,verify email and 
// check if the user is above 18 years of age

var hasCard = true;
var userId = "user123";
var isLoggedIn = true;
var isEmailVerified = true;
var age = 25;

if (hasCard && userId === "user123" && isLoggedIn && isEmailVerified && age > 18) {
    console.log("Purchase successful!");
} else {
    console.log("Purchase failed. Please check your details and try again.");
}
