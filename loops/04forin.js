//Understanding loops in JavaScript


var OTT =["Netflix","HBO Max","Disney+",2013,"Amazon Prime Video"];

//forin loop with continue statement
for (var index in OTT) {
    console.log(`I like to watch content on ${OTT[index]}`);
    if (typeof OTT[index] === "number") {
        console.log(`The year ${OTT[index]} is when the OTT platform was launched.`);
        //break; // Exit the loop when a number is encountered
        continue; // Skip the current iteration and continue with the next one
    }   
    
}

console.log("--------------------------------------------------");
//forin loop with break statement
for (var index in OTT) {
    console.log(`I like to watch content on ${OTT[index]}`);
    if (typeof OTT[index] === "number") {
        console.log(`The year ${OTT[index]} is when the OTT platform was launched.`);
        break; // Exit the loop when a number is encountered
        //continue; // Skip the current iteration and continue with the next one
    }   
    
}
