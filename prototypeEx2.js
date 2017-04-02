function Shape(size, type) {
this.size = size
this.type = type
}

Shape.prototype.Draw = function(){
    console.log('Drawing a ' + this.size + ' ' + this.type)
}

let circle = new Shape('small', 'circle')
let rectangle = new Shape('medium','rectangle')
let octagon = new Shape('big','octagon')

circle.Draw()
rectangle.Draw()
octagon.Draw()