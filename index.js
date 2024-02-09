// Variable declarations...
// Import writeFile function from built-in file system module
const { writeFile } = require('fs');

// Import Inquirer to collect input from the user
const inquirer = require('inquirer');

// Import classes from script to define shape
const { Circle, Square, Triangle } = require('./lib/shapes.js');

// Create array of all 140 HTML color keywords
const colorKeywords = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen'
]

// Create array of questions for user input
const questions = [
    // Logo text (Max. 3 characters)
    {
        name: 'text',
        type: 'input',
        message: 'Please enter your logo text (maximum of 3 characters allowed): ',
        validate(text) {
                if (text.length > 3) {
                    return 'Logo text must be three characters or less. Please try again.';
                }
                return true;
            },
        filter: (text) => text.toUpperCase(),
    },
    // Logo text color (Can be hex color code OR color keyword)
    {
        name: 'textColor',
        type: 'input',
        message: 'Please enter a color keyword or hex color code for the text (e.g. royalblue or #febe98): ',
        filter: (color) => color.toLowerCase(),
        validate: (color) => validateColor(color), 
    },
    // Logo shape (Triangle, Circle, or Square)
    {
        name: 'shape',
        type: 'list',
        message: 'Please select the logo shape: ',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    // Logo shape color (Can be hex color code OR color keyword)
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Please enter a color keyword or hex color code for the shape (e.g. royalblue or #febe98): ',
        filter: (color) => color.toLowerCase(),
        validate: (color) => validateColor(color),
    }
]

// Functions...
// Create function to initalize inquirer questions and write SVG file with the answers
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            return writeToFile('logo.svg', renderSVG(answers));
    })
}

// Create function to render SVG file content
function renderSVG(answers) {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    ${svgShape(answers.shape, answers.shapeColor)}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`;
}

// Create function to initalize matching class for selected SVG shape
function svgShape(shape, color) {
    let svgShape;
    
    switch (shape) {
        case "Circle":
        svgShape = new Circle();
        svgShape.setColor(color);
        return svgShape.render();

        case "Square":
        svgShape = new Square();
        svgShape.setColor(color);
        return svgShape.render();

        case "Triangle":
        svgShape = new Triangle();
        svgShape.setColor(color);
        return svgShape.render();
    }
}

// Create function to test input matches color keyword or hex color code
function validateColor(color) {
    // Test input matches hex color code:
    //  1. Starts with #
    //  2. After #, there should be 6 characters containing: letters A-F, a-f, and/or digits 0-9
    const pattern = new RegExp("^#[A-Fa-f0-9]{6}$");
    if (pattern.test(color) === true) {
        return true;
    } else {
        // Loop through array of color keywords for a match
        for (const keyword of colorKeywords) {
        if (color === keyword) {
            return true;
        }
        }
        return "Invalid color. Please try again.";
    }
}

// Create function to write file
function writeToFile(fileName, data) {
    writeFile(fileName, data, error => {
        if (error) {
        console.error(`There was an error creating the ${fileName} file: ${error.message}`);
        return;
        }
        console.log(`Generated ${fileName}!`);
        return fileName;
    })
}

// Function call to initalize app
init();