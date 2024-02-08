// Import classes from script to define shape
const { Circle, Square, Triangle } = require('./shapes.js');

// TODO: All tests below must pass

// Circle tests

// Square tests

// Triangle tests
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');