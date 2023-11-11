const Shape = require('./Shape'); 

class Triangle extends Shape {
    render() {
        // Define the vertices of the triangle
        const points = "250,0 0,500 500,500";

        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${points}" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="250" y="300" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;
    }
}


module.exports = Triangle;