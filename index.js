//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6

//Enumerating properties
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);
//Enumerating all the members of an object
for(let key in circle) {
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key])
}

//another approach
//to get all the keys in an Object use Object.keys
const keys = Object.keys(circle)
console.log(keys);

//To check for existing of a property or a method in an object use in operator
if('radius' in circle)
    console.log('Circle has a radius')
