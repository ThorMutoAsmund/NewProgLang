import * as babylon from "babylon";
import template from "babel-template";
import traverse from "babel-traverse";
import generate from "babel-generator";
import * as t from "babel-types";


"use strict";

exports.__esModule = true;

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== "-") {
          return;
        }
      
        path.node.left = t.numericLiteral(2); // t.identifier("1");
        path.node.right = t.numericLiteral(1); //t.identifier("1");
      }  
    }

  };
};

module.exports = exports["default"];
