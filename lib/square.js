const Shape = require('./Shape'); 

class Square extends Shape {
    render() {

        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="200" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="150" y="120" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}

module.exports = Square;
