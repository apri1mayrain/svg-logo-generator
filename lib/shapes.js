// Classes...
// Create parent class Shape
class Shape {
    // Create constructor to set color provided by user
    constructor() {
        this.color = '';
    }

    // Create function to set color
    setColor(color) {
        this.color = color;
    }
}

// Create Circle class, child of Shape class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

// Create Square class, child of Shape class
class Square extends Shape {
    render() {
        return `<rect x="30" y="20" height="160" width="240" fill="${this.color}"/>`;
    }
}

// Create Triangle class, child of Shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}"/>`;
    }
}

// Export classes (used in index.js)
module.exports = { Circle, Square, Triangle };