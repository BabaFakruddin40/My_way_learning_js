//objects in JS 

var phone = {
    name: "iPhone 12 Pro Max",
    price: 1099,
    color: "Pacific Blue",
    storage: "128GB",
    display: "6.7 inch Super Retina XDR display",
    camera: "12MP triple-camera system with LiDAR scanner",
    battery: "Up to 20 hours of talk time",
    operatingSystem: "iOS 14",
    features: ["5G capable", "Ceramic Shield front cover", "A14 Bionic chip", "MagSafe accessories"],
    releaseDate: "October 23, 2020"
};

console.log(phone);

//accessing properties of object 
console.log(phone.name);
console.log(phone["price"]);

//adding new property to object 
phone.ram = "6GB";
console.log(phone);

//deleting property from object 
delete phone.storage;
console.log(phone);

//checking if property exists in object 
console.log("color" in phone); // Output: true
console.log("storage" in phone); // Output: false