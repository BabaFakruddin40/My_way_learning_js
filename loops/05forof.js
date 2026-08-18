//Understanding loops in JavaScript

//Forof  loop
var football = {
    Messi: "Argentina",
    Ronaldo: "Portugal",
    Neymar: "Brazil",
    Mbappe: "France",
    Salah: "Egypt"
}

for (var player of Object.keys(football)) {
    console.log(`${player} plays for ${football[player]}`);
}
