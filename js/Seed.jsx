import SeedStyle from "../css/Seed.css";

import React from 'react';

import Node from "./Node";

var Nodes = require("./SeedyScript.js");

var data = Nodes.makeSampleData(20);
console.log(data);

export default class Seed extends React.Component {

  render() {
    var renderTree = function(key){
      var node = data[key];
      return (
        <Node key={ key } dataID={ key } { ...node }>
          { node.children && node.children.map(function(child) {
            return renderTree(child)
          })}
        </Node>
      )
    }
    return (
      <div>
        { renderTree("root") }
      </div>
    );
  }
}