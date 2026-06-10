//getUserRole() arrow function
var getUserRole = (name, role) => {
    switch (role) {
        case "admin":
            return `${name} is an admin with all access.`;
        case "subadmin":
            return `${name} is a subadmin with access to create and delete courses.`;
        case "testprep":
            return `${name} is a testprep with access to create and delete tests.`;
        case "user":
            return `${name} is a user with access to consume content.`;
        default:
            return `${name} is a trial user.`;
    }
};

console.log(getUserRole("Alice", "admin"));
console.log(getUserRole("Bob", "subadmin"));
console.log(getUserRole("Charlie", "testprep"));
console.log(getUserRole("Dave", "user"));
console.log(getUserRole("Eve", "guest"));   