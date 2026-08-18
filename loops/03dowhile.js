//Understanding loops in JavaScript


var OTT =["Netflix","HBO Max","Disney+",2013,"Amazon Prime Video"];
// for (var i = 0; i < OTT.length; i++) {
//     console.log(`I like to watch content on ${OTT[i]}`);
//     if (typeof OTT[i] === "number") {
//         console.log(`The year ${OTT[i]} is when the OTT platform was launched.`);
//         //break; // Exit the loop when a number is encountered
//         continue; // Skip the current iteration and continue with the next one
//     }   
    
// }
var i = 20;

//Do while loop with continue statement
do {
    console.log(`I like to watch content on ${OTT[i]}`);
    if (typeof OTT[i] === "number") {
        console.log(`The year ${OTT[i]} is when the OTT platform was launched.`);
        //break; // Exit the loop when a number is encountered
        i++; // Increment the counter before continuing to avoid an infinite loop
        continue; // Skip the current iteration and continue with the next one
    }
    i++; // Increment the counter
} while (i < OTT.length);

//Do while loop with break statement
// var i = 0;
// do {
//     console.log(`I like to watch content on ${OTT[i]}`);
//     if (typeof OTT[i] === "number") {
//         console.log(`The year ${OTT[i]} is when the OTT platform was launched.`);
//         break; // Exit the loop when a number is encountered
//         i++; // Increment the counter before continuing to avoid an infinite loop
//         //continue; // Skip the current iteration and continue with the next one
//     }
//     i++; // Increment the counter
// }while (i < OTT.length)
