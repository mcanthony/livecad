module.exports = Shape;

function Shape() {
  this.id = Shape.shapeId++;
}

Shape.shapeId = 1;

Shape.prototype.id = 0;

// TODO: either extend from renderable or compose over one