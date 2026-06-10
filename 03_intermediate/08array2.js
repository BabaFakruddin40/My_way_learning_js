users = ["Alice", "Bob", "Charlie"];

let reducedUsers = users.reduce((acc, user) => acc + " " + user, "");
console.log(reducedUsers.trim());

users.forEach(user => console.log(user));

users.fill("Nan", 0, 3);
console.log(users);

var result = [2,3,4,5].every(num => num % 2 === 0); // Output: false (because 3 is not even)
console.log(result);
var result1 = [2,4,6,8].every(num => num % 2 === 0); // Output: true (all numbers are even)
console.log(result1);

console.log([1,2,3,4].some(num => num > 3)); // Output: true (because 4 is greater than 3)
console.log([1,2,3,4].some(num => num > 5)); // Output: false (no numbers are greater than 5)

console.log([23,45,6,78,90].find(num => num > 50)); // Output: 78 (the first number greater than 50)
console.log([23,45,6,78,90].findIndex(num => num > 50)); // Output: 3 (the index of the first number greater than 50)

//log all the numbers greater than 50
[23,45,6,78,90].forEach(num => {
    if(num > 50) {
        console.log(num);
    }
}); 

//log all the numbers greater than 50 using filter and forEach
[23,45,6,78,90].filter(num => num > 50).forEach(num => console.log(num));

//log all the numbers greater than 50 using reduce and forEach
[23,45,6,78,90].reduce((acc, num) => {
    if(num > 50) {
        acc.push(num);
    }
    return acc;
}, []).forEach(num => console.log(num));

//log index of all the numbers greater than 50 using reduce and forEach
[23,45,6,78,90].reduce((acc, num, index) => {
    if(num > 50) {
        acc.push(index);
    }
    return acc;
}, []).forEach(index => console.log(index));

//log index of all the numbers greater than 50 using filter and forEach
[23,45,6,78,90].map((num, index) => ({num, index})).filter(item => item.num > 50).forEach(item => console.log(item.index));

//log index of the number greater than 50 using findIndex
[23,45,6,78,90].findIndex(num => num > 50);

