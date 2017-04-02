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

Object.setPrototypeOf(circle,shape)
Object.setPrototypeOf(rectangle,shape)
Object.setPrototypeOf(octagon,shape)

circle.Draw()
rectangle.Draw()
octagon.Draw()