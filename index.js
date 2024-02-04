//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6

//Functions are Object
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1); // call method with which we can call the function since {} will referr emtpy object which refer this.
//and the expression will be like const another = new Circle(1);

Circle.apply({}, [1,2,3]);//instead of passing all argument explicitly we can pass as an array

const another = new Circle(1);// So when new operator has been used it will create an empty object which will be first parameter of call function that point to this. of Circle function.
//if new operator is not used then it will use this object of global class which is not good.