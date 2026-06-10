//understanding the scope in java script 

//global scope
var name = "Alice" ;

console.log(name); // Output: Alice

function SayMyname() {
    var name = "Bob";
    console.log(name); // Output: Bob

    SayMyNameAgain();

    function SayMyNameAgain() {
         var name = "Charlie";
        console.log(name); // Output: charlie
    }
}

SayMyname();

