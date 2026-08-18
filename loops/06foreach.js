//Understanding loops in JavaScript

//Foreach loop
var football = {
    Messi: "Argentina",
    Ronaldo: "Portugal",
    Neymar: "Brazil",
    Mbappe: "France",
    Salah: "Egypt"
}

//Using foreach loop to iterate over the keys of the football object
Object.keys(football).forEach(function(player) {
    console.log(`${player} plays for ${football[player]}`);
});

console.log("--------------------------------------------------");

//Using arrow function with forEach loop
Object.keys(football).forEach(player => {
    console.log(`${player} plays for ${football[player]}`);
});

console.log("--------------------------------------------------");

var OTT =["Netflix","HBO Max","Disney+",2013,"Amazon Prime Video"];
OTT.forEach(function(platform) {
    console.log(`I like to watch content on ${platform}`);});