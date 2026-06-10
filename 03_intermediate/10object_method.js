//objects and methods in JS

var user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@dev.com",
    courses: [],
    buyCourse: function(courseName) {
        this.courses.push(courseName);
        return `${this.name} has bought the course: ${courseName}`;
    },
    getCourseCount: function() {
        return `${this.name} has enrolled in ${this.courses.length} courses.`;
    }
};

console.log(user.courses);

["JavaScript Basics","JavaScript Advanced","Python"].forEach(courses => user.buyCourse(courses));
//console.log(user.buyCourse);
console.log(user.getCourseCount()); 
console.log(user.courses)
console.log(`${user.name} has bought the courses: ${user.courses.join(", ")} and ${user.getCourseCount()}`);
