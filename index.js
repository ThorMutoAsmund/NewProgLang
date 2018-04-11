import * as babylon from "babylon";
import template from "babel-template";
import traverse from "babel-traverse";
import generate from "babel-generator";
import * as t from "babel-types";


var compare = (a, b) => {
  return b - a;    
}

console.log(compare(2, 3));

 
// const code = `var compare = (a, b) => {
//   return 1 - 1;    
// }`;

// const ast = babylon.parse(code);
// console.log(ast.program.body[0].declarations[0].init.body.body[0].argument);

