//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6

//Primitives Vs Reference
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
