# SVG Logo Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://github.com/apri1mayrain/make-svg-logo/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-darkgreen?style=for-the-badge)](https://nodejs.org/en)
[![Inquirer](https://img.shields.io/badge/NPM-Inquirer-yellow?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/inquirer)
[![Inquirer](https://img.shields.io/badge/NPM-Jest-yellow?style=for-the-badge&logo=npm)](https://jestjs.io/docs/getting-started)
[![Inquirer](https://img.shields.io/badge/SVG-blue?style=for-the-badge&logo=svg)](https://www.w3.org/Graphics/SVG/)

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Description

This application allows you to generate a logo and save it as a [SVG](https://www.w3.org/Graphics/SVG/) file.

 You will be prompted to answer questions to generate the logo such as text, text color, shape, and shape color. Once all questions are answered, the SVG logo will be saved in the **logo.svg** file. 
 
 To start the app, please reference the [Installation](#installation) instructions below.

## Features

* [Node.js](https://nodejs.org/en) to execute JavaScript in CLI or *outside* of web browser.
* [Built-in file system module](https://nodejs.org/api/fs.html) to write **logo.svg** file.
* [Inquirer v8.2.4](https://www.npmjs.com/package/inquirer) for interactive user input. In this app, two types of input are used: input and list, and two optional functions were implemented to manipulate and validate input: filter and validate.
* [Jest v29.7.0](https://jestjs.io/docs/getting-started) for testing Circle, Square, and Triangle classes in **lib/shapes.js**.
* [Scalable Vector Graphics (SVG)](https://www.w3.org/Graphics/SVG/) to create a custom SVG logo.

## Installation

1. Download [Node.js](https://nodejs.org/en).
2. Download repo files by [cloning the repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) or [downloading the ZIP folder](https://github.com/apri1mayrain/svg-logo-generator/archive/refs/heads/main.zip). If downloading ZIP folder, please be sure to extract the folder.
3. Open your preferred command line interface.
3. Navigate to the file directory containing the repo.
4. Install the Inquirer and Jest NPM with command: `npm install`
5. Start the app to generate your logo.svg file with command: `node index.js`

## Demo

Click photo below to view demo video:

[![Link to demo video](./assets/images/video.png)](https://drive.google.com/file/d/1zQGVuEuCNf4wJRd8gNHhWG_sp_En08O0/view?usp=sharing)

## Screenshots

Terminal results:

![Screenshot of inquirer answers](./assets/images/answers.png)

Invalid answers for text and color:

![Screenshot of invalid text](./assets/images/invalid-text.png)
![Screenshot of invalid color](./assets/images/invalid-color.png)

triangle.svg file content:

![Screenshot of triangle.svg file content](./assets/images/svg-file.png)

Generated SVG examples:

![Screenshot of generated circle.svg file](./examples/circle.svg)
![Screenshot of generated square.svg file](./examples/square.svg)
![Screenshot of generated triangle.svg file](./examples/triangle.svg)

## Tests

Run tests for Circle, Square, and Triangle classes with command: `npm run test`

Tests are stored in **lib/shapes.test.js**.

Terminal after running passing tests:

![Screenshot of all tests passed](./assets/images/passing-tests.png)

Terminal after running a failed Circle class test:

![Screenshot of failing Circle class test](./assets/images/test-fail.png)

## Credits

* Reference for 140 HTML color names: [https://htmlcolorcodes.com/color-names/](https://htmlcolorcodes.com/color-names/)

* Researched Stack Overflow forums and other coding resources.

## License

MIT License - Copyright © 2024 apri1mayrain

[(Go back to top)](#svg-logo-generator)