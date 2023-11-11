const Circle = require('../lib/circle')
const Square = require('../lib/square')
const Triangle = require('../lib/triangle')

function generateLogo(data) {
    // if (!data || !data.Shape || !data.color || !data.text || !data.textColor) {
    //     throw new Error("Invalid data provided");
    // }

    let shape;
    if (data.shape === "circle") {
        shape = new Circle(data.shapeColor, data.text, data.textColor)
    } else if (data.shape === 'triangle') {
        shape = new Triangle(data.shapeColor, data.text, data.textColor)
    } else {
        shape = new Square(data.shapeColor, data.text, data.textColor)
    }
    return shape.render()
}

module.exports = generateLogo;
