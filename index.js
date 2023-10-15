// Included packages for application success
const fs = require('fs');
const inquirer = require ('inquirer');
const path = require('path')
const generateLogo = require('./lib/shapes')

// Inquirer questions to genrerate the image
const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Choose three characters.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color (Use a color keyword or a hexadecimal number).',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter a shape.',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape\'s color (Use a color keyword or a hexadecimal number).',
    },
]

// // // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
        }

// // TODO: Create a function to initialize app
function init() {
    // Create a README inside of folder 'dist'
    fs.mkdir('dist', (err) => {
        if (err) throw err;
    });

inquirer.prompt(questions).then((answers) => {
    console.log("Creating your custom SVG Logo!");
    writeToFile("./dist/Logo.svg", generateLogo({ ...answers }));
    });
}
init();