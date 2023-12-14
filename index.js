// Included packages for application success
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateLogo = require("./utils/generateLogo");

// Inquirer questions to generate the image
const questions = [
	{
		type: "list",
		name: "shape",
		message: "Enter a shape.",
		choices: ["circle", "triangle", "square"],
	},
	{
		type: "input",
		name: "shapeColor",
		message:
			"Enter the shape's color (Use a color keyword or a hexadecimal number).",
	},
	{
		type: "input",
		name: "text",
		message: "Choose three characters.",
	},
	{
		type: "input",
		name: "textColor",
		message:
			"Enter a text color (Use a color keyword or a hexadecimal number).",
	},
];

// // // TODO: Create a function to write README file

function writeToFile(fileName, data) {
	const content = generateLogo(data);
	fs.writeFile(fileName, content, function (err) {
		if (err) {
			return console.error(err);
		}
		console.log("Generated logo.svg");
	});
}

function init() {
	inquirer.prompt(questions).then(function (data) {
		const fileName = "logo.svg";
		writeToFile(fileName, data);
	});
}

init();
