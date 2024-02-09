// Import classes from script to define shape
const { Circle, Square, Triangle } = require('./shapes.js');

// Circle test
describe('Circle', () => {
    it('should render element for a lawngreen circle', () => {
        const shape = new Circle();
        shape.setColor('lawngreen');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="lawngreen"/>');
    });
});

// Square test
describe('Square', () => {
    it('should render element for a cornflowerblue square', () => {
        const shape = new Square();
        shape.setColor('cornflowerblue');
        expect(shape.render()).toEqual('<rect x="30" y="20" height="160" width="240" fill="cornflowerblue"/>');
    });
});

// Triangle test
describe('Triangle', () => {
    it('should render element for a #febe98 triangle', () => {
        const shape = new Triangle();
        shape.setColor('#febe98');
        expect(shape.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="#febe98"/>');
    });
});