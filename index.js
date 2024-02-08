// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// ------------------------------------------------------------------------------------------------
// Variable declarations...
// Import script to generate logo
const generateLogo = require('./lib/shapes.js');

// File system built-in module
const fs = require('fs');

// Import Inquirer to collect input from the user
const inquirer = require('inquirer');

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
];

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
        choices: ['Triangle', 'Circle', 'Square'],
    },
    // Logo shape color (Can be hex color code OR color keyword)
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Please enter a color keyword or hex color code for the shape (e.g. royalblue or #febe98): ',
        filter: (color) => color.toLowerCase(),
        validate: (color) => validateColor(color),
    }
];

// Functions...
// Create function to initalize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => writeToFile('logo.svg', JSON.stringify(answers)));
        // .then((answers) => writeToFile("logo.svg", generateLogo(answers)));
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
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, error => {
        if (error) {
        console.error(`There was an error creating the ${fileName} file: ${error.message}`);
        return;
        }
        console.log(`Generated ${fileName}!`);
        return;
    });
}

// Function call to initalize app
init();