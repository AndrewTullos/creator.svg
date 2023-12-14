const Triangle = require("../lib/triangle");

test("Triangle render method returns correct SVG", () => {
	const shape = new Triangle();
	shape.setColor("blue");
	shape.setText(""); // Ensure text is empty
	shape.setTextColor(""); // Ensure text color is empty

	const expectedSVG =
		'<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg"><polygon points="250,0 0,500 500,500" fill="blue" /><text fill="" font-size="75" x="250" y="300" text-anchor="middle" dominant-baseline="middle"></text></svg>';

	// Function to normalize whitespace by removing all spaces between tags
	const normalizeWhitespace = (str) => str.replace(/>\s+</g, "><").trim();

	expect(normalizeWhitespace(shape.render())).toEqual(
		normalizeWhitespace(expectedSVG)
	);
});
