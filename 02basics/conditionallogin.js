//allow user to login from userid, gmail or facebook
var loginMethod = "userid";


if (loginMethod === "userid") {
    console.log("Logging in with UserID...");
} else if (loginMethod === "gmail") {
    console.log("Logging in with Gmail...");
} else if (loginMethod === "facebook") {
    console.log("Logging in with Facebook...");
} else {
    console.log("Invalid login method!");
}

//Allow login with anyone of this email,google, facebook, verfiy email and check if the user is above 18 years of age

var isLoggedIn = true;
var isEmailVerified = true;
var isGoogleLogin = true;
var isFacebookLogin = true;
var age = 25;

if ((isLoggedIn && isEmailVerified && age > 18) || isGoogleLogin || isFacebookLogin) {
    console.log("Login successful!");
} else {
    console.log("Login failed. Please check your details and try again.");  
}
