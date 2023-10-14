// Included packages for application success
const fs = require('fs');
const inquirer = require ('inquirer');
const path = require('path')

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