var User=function(username,email,contact){
    this.username=username;
    this.email=email;
    this.contact=contact;
    this.getDetails=function(){
        return `Username: ${this.username},email: ${this.email}`;
    }
}

User.prototype.getContact=function(){
    return `Contact: ${this.contact}`;
}   

var user1=new User("John Doe","john.doe@example.com","123-456-7890");

var user2=new User("Jane Smith","jane.smith@gmail.com","987-654-3210");

if (user1.hasOwnProperty("getDetail")) {
    console.log("user1 is an instance of User");
} else {
    console.log("user1 is NOT an instance of User");
}

console.log(user1.getDetails());
console.log(user2.getContact());