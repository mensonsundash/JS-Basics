//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6
const circle = {//{}object literals syntax 
    radius:1, //properties
    location: { //properties
        x: 1,
        y: 1
    },
    draw: function () { //methods
        console.log('draw');
    }
};


circle.draw();
