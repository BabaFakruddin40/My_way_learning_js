//Understanding loops in JavaScript

//For loop
var OTT =["Netflix","HBO Max","Disney+",2013,"Amazon Prime Video"];

// for (var i = 0; i < OTT.length; i++) {
//     console.log(`I like to watch content on ${OTT[i]}`);
//     if (typeof OTT[i] === "number") {
//         console.log(`The year ${OTT[i]} is when the OTT platform was launched.`);
//         //break; // Exit the loop when a number is encountered
//         continue; // Skip the current iteration and continue with the next one
//     }   
    
// }

//While loop with continue statement
var i = 0;
while (i < OTT.length) {
    console.log(`I like to watch content on ${OTT[i]}`);
    if (typeof OTT[i] === "number") {
        console.log(`The year ${OTT[i]} is when the OTT platform was launched.`);
        //break; // Exit the loop when a number is encountered
        i++; // Increment the counter before continuing to avoid an infinite loop
        continue; // Skip the current iteration and continue with the next one
    }
    i++; // Increment the counter
}

//While loop with break statement
// var i=0;
// while (i < OTT.length) {
//     console.log(`I like to watch content on ${OTT[i]}`);
//     if (typeof OTT[i] === "number") {
//         console.log(`The year ${OTT[i]} is when the OTT platform was launched.`);
//         break; // Exit the loop when a number is encountered
//         i++; // Increment the counter before continuing to avoid an infinite loop
//         //continue; // Skip the current iteration and continue with the next one
//     }
//     i++; // Increment the counter
// }

