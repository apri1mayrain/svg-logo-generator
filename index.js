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

// Import Inquirer to collect input from the user
const inquirer = require('inquirer');

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
        filter(text) {
            return text.toUpperCase();
        }
    },
    // Logo color (Uses hex color code)
    {
        name: 'color',
        type: 'input',
        message: 'Please enter a hex color code for the logo (e.g. #febe98): ',
        validate(color) {
                // Test input matches hex color code:
                //  1. Starts with #
                //  2. After #, there should be 6 characters containing: letters A-F, a-f, and/or digits 0-9
                const pattern = new RegExp("^#[A-Fa-f0-9]{6}$");
                if (pattern.test(color) === false) {
                    return 'Invalid hex color code. Please try again.';
                }
                return true;
        }
    },
    // Logo shape (Triangle, Circle, or Square)
    {
        name: 'shape',
        type: 'list',
        message: 'Please select the logo shape: ',
        choices: ['Triangle', 'Circle', 'Square'],
    }
];

// Create function to initalize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
    });
}

// Function call to initalize app
init();