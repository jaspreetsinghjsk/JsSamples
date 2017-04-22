let shape = {
    
    Draw : function () {
        //console.log(this)
        console.log("Formation of the " + this.type + " is " + this.formation)
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

drawCircle = shape.Draw.bind(circle)
drawRect = shape.Draw.bind(rectangle)
drawOctagon = shape.Draw.bind(octagon)
drawCircle()
drawRect()
drawOctagon()
