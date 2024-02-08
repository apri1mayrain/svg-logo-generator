// Import shapes.js file
const shapes = require('./shapes.js');

// Create class variables
const { Triangle, Circle, Square } = shapes;

// TODO: All tests below must pass

// Triangle tests
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Circle tests

// Square tests
