const acorn = require('acorn'); // npm:acorn
/*
 * Numeric Separators via acorn-numeric-separator
 * Class field declarations via acorn-class-fields
 * Private methods and getter/setters for JavaScript classes via acorn-private-methods
 * Static class features via acorn-static-class-features
 * Logical assignments via acorn-logical-assignment
 */
const acornStage3 = require('acorn-stage3');

// @ts-ignore
acorn.Parser = acornStage3(acorn.Parser);

module.exports = acorn;
