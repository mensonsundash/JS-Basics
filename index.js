//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6

//Factory function
function createCircle(radius) {
    return {//{}object literals syntax 
        radius, //ES6-> radius: radius if key and value are same remove noise
        draw: function () { //methods
            console.log('draw');
        }
    };
}
//We can create a new object circle
const circle = createCircle(1); //calling factory function 

