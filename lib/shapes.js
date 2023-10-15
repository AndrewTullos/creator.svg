class shape {
    constructor() {
        
    }
}

class circle {
    constructor() {
        
    }
}

class square {
    constructor() {
        
    }
}

class triangle {
    constructor() {
        
    }
}

// Function to select the shape
// if ()

// Square
// <rect x="10" y="10" width="30" height="30"/>
// <rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>

// Circle
// <circle cx="25" cy="75" r="20"/>

// Triangle
// <polygon points="100,10 40,190 160,190" fill="${color}" />



// Function to create the SVG
function generateLogo(data) {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="white" />

    <${data.shapes} cx="150" cy="100" r="80" fill="${data.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>

    </svg>
    `
}

module.exports = generateLogo.js