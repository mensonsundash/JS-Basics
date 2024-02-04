//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6

// Abstraction
function Circle(radius) {
    
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    let computeOptimumLocation = function(factor) {

    }
    this.draw = function () {
        computeOptimumLocation(0.1);
        // defaultLocation
        //this.radius
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.draw();
