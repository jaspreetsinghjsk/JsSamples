let shape = {
    
    Draw : function () {
        //console.log(this)
        console.log("Formation of the " + this.type + " is " + this.formation)
        return true
    }
}

let circle = {
    type: "Circle",
    formation: "circular"
}

let rectangle = {
    type: "Rectangle",
    formation : "rectangular"
}

let octagon = {
    type: "Octagon",
    formation : "octagonal"
}

// drawCircle = shape.Draw.bind(circle)
// drawRect = shape.Draw.bind(rectangle)
// drawOctagon = shape.Draw.bind(octagon)
// drawCircle()
// drawRect()
// drawOctagon()

//Difference between apply and bind: 
//bind binds and returns the bound method, apply binds and executes the method
shape.Draw.apply(circle)
shape.Draw.apply(rectangle)
o = shape.Draw.apply(octagon)
console.log(o)
