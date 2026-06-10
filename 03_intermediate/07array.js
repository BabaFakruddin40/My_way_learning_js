//Array 
//defining array 
//learn arrow functions 
//built in methods of array pop,shift,unshift,push,concat,join,reverse,sort,splice,slice
//map,filter,reduce
//forEach,find,findIndex,every,some

//defining array 
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//arrow functions 
let add = (a, b) => a + b;
console.log(add(2, 3));

//built in methods of array 
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);

let arr2 = [7, 8, 9];
let arr3 = arr.concat(arr2);
console.log(arr3);

let str = arr.join("-");
console.log(str);

arr.reverse();
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);   

users=["John", "Jane", "Doe", "Smith"];
users.splice(2, 1);
console.log(users);

users.splice(2, 1, "Alice", "Bob");
console.log(users);

let slicedUsers = users.slice(1, 3);
console.log(slicedUsers);

let mappedUsers = users.map(user => user.toUpperCase());
console.log(mappedUsers);

let filteredUsers = users.filter(user => user.startsWith("J"));
console.log(filteredUsers);

let reducedUsers = users.reduce((acc, user) => acc + " " + user, "");
console.log(reducedUsers.trim());

  
users.forEach(user => console.log(user));

// searching in array - here we are searcing for "Alice" in the users array and if found we will print it 
let foundUser = users.find(user => user === "Alice");
console.log(foundUser);