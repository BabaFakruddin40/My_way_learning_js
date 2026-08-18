//Understanding loops in JavaScript

//For loop
var OTT =["Netflix","HBO Max","Disney+",2013,"Amazon Prime Video"];
for (var i = 0; i < OTT.length; i++) {
    console.log(`I like to watch content on ${OTT[i]}`);
    if (typeof OTT[i] === "number") {
        console.log(`The year ${OTT[i]} is when the OTT platform was launched.`);
        //break; // Exit the loop when a number is encountered
        continue; // Skip the current iteration and continue with the next one
    }   
    
}