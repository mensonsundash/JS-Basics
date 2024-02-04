//Object orient programming
//OOP concepts
//Objects
//Declaring variable using Var has issues like scoping so use either let or Const
//ES6

// Abstraction
function Circle(radius) {
    
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    //if you want to get the private function outside scope of the class
    //Getter
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function () {
        console.log('draw');
    }

    //Use Object.defineProperty to define getter or setter
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();
