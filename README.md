# Creator.SVG

![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2012.0.0-brightgreen)
![npm Version](https://img.shields.io/badge/npm-%3E%3D%206.0.0-blue)

## Overview

<p align="center">
<img src="./examples/example.png" width="auto" height="auto">
</p>

Creator.SVG is a Node.js application designed to generate customizable SVG logos for companies. Users can easily create a logo by specifying a shape, its color, text, and text color, making it an ideal tool for quickly crafting simple yet effective company logos.

## Objective

To provide an easy and efficient way for individuals and businesses to create basic logos. This tool is perfect for startups or projects that require a quick, visually appealing logo without the need for complex design software.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the GitHub repository.
2. Navigate to the application directory in your terminal.
3. Ensure Node.js and npm are installed.
4. Run `npm install` to install all dependencies.
5. Start the application using `node index.js`.

## Usage

Run the application, and you will be prompted to enter:

- A shape (circle, triangle, square)
- A color for the shape
- Up to three characters for the text
- A color for the text

After inputting these details, the application will generate an SVG file named `logo.svg` in the current directory.

## Features

- **Simple Input**: Easy-to-follow prompts for quick logo generation.
- **Customizable**: Choose from different shapes, colors, and text.
- **SVG Output**: Generates a scalable vector graphic file suitable for various uses.

## Built With

- [Node.js](https://nodejs.org/en/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)

## Contributing

Contributions to improve the project are welcome. Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the ISC License.
