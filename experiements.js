import * as babylon from "babylon";
import template from "babel-template";
import traverse from "babel-traverse";
import generate from "babel-generator";
import * as t from "babel-types";


//import testPlugin from '../demo-plugin';


// const code = `function square(n) {
//   return n * n;
// }`;

// const ast = babylon.parse(code);
// //console.log(ast.program.body[0].params[0]);

// traverse(ast, {
//   enter(path) {
//     if (
//       path.node.type === "Identifier" &&
//       path.node.name === "n"
//     ) {
//       path.node.name = "x";
//     }
//   }
// });

// //console.log(ast.program.body[0].params[0]);

// const output = generate(ast, {}, code);

// console.log(output.code)

// const buildRequire = template(`
//   var IMPORT_NAME = require(SOURCE);
// `);

// const brAst = buildRequire({
//   IMPORT_NAME: t.identifier("myModule"),
//   SOURCE: t.stringLiteral("my-module")
// });

// console.log(generate(brAst).code);

/*
const code = `function isTrue(n) {
  return n === true;
}`;

const ast = babylon.parse(code);
traverse(ast, testPlugin({types: t}).visitor);
const output = generate(ast, {}, code);

console.log(output.code);*/