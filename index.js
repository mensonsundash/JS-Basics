//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6

//Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);
//when we use new operator to call a function
// it will create empty object ,(Circle {})
// Then it will set this to point to that object
// Finally it will return that object from this(Circle()) function