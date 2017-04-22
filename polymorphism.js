let shape = {
    stroke: "green",
    drawShape: function() {
        this.drawShape();
    }

}

let circle = {
    cx:0,
    drawShape: function(){
        console.log("circle stroke:" + this.stroke + " cx:" + this.cx);
    }
}

let rect = {
    width: 10,
    drawShape: function(){
        console.log("rect stroke:" + this.stroke + " width:" + this.width);
    }
}

shape.drawShape.apply(circle);
shape.drawShape.apply(rect);
