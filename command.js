let shape = {
    drawShape: function() {
        let drawingSurface = getDrawingSurface();
        let c = this.drawShape();
        drawingSurface.appendChild(c);
    }

}

let circle = {
    stroke: "green",
    strokeWidth: 2,
    fill:"yellow",
    id:"id",
    cx: 0,
    cy: 0,
    radius: 0,
    drawShape: function(){
        this.radius = Math.floor(10 + Math.random()*50);
        this.cx = Math.floor(40 + Math.random()* 760);
        this.cy = Math.floor(40 + Math.random()* 460);
        let c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', this.cx);
        c.setAttribute('cy', this.cy)
        c.setAttribute('r', this.radius);
        c.setAttribute('stroke',this.stroke);
        c.setAttribute('stroke-width',this.strokeWidth);
        c.setAttribute('fill',this.fill);
        c.setAttribute("id", "circle" + shapeList.shapeIndex);
        return c;
    }  
}


let getDrawingSurface = function() {
    let drawingSurface = document.getElementById("drawingSurface");
    if(!drawingSurface)
    {
        drawingSurface = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); 
        drawingSurface.setAttribute('width', 800);
        drawingSurface.setAttribute('height', 500);
        drawingSurface.setAttribute('id',"drawingSurface");

        let container = document.getElementById("container");
        container.appendChild(drawingSurface);
    }
    return drawingSurface;
}

let shapeList = {
    shapes: [],
    shapeIndex: 0,

    add: function(shape) {
        this.shapes.push(shape);
        this.shapeIndex += 1;
    },
    
    getCurrent: function(){
        return this.shapes[this.shapeIndex];
    },

    forward: function() {
        if(this.shapeIndex< this.shapes.length - 1 ) {
            this.shapeIndex += 1;
        }
    },

    reverse: function() {
        if(this.shapeIndex > 0 ) {
            this.shapeIndex -= 1;
        }
    }

}

let commandBinder = {

    bindExecute : function(element,event, command)
    {
        document.getElementById(element)
            .addEventListener(event, command());
    }
};

let circleCommand = function() {
    let shapeType = circle;
    return function() {
        //console.log(shapeType);
        shape.drawShape.apply(shapeType);
        //shapeList.add(c);
    }
};

let undoCommand = function() {
    return function(){
        //let shape = shapeList.getCurrent();
        //console.log("undoing: " + shape.getAttribute("id") );
        //let domElement = document.getElementById(shape.getAttribute("id"));
        let drawingSurface = getDrawingSurface();
        drawingSurface.removeChild(drawingSurface.childNodes[drawingSurface.childNodes.length - 1]);
        //shapeList.reverse();
    }
};

(function(){
    commandBinder.bindExecute("btnCircle", "click", circleCommand);
    commandBinder.bindExecute("btnUndo", "click", undoCommand);
})();






