import SeedStyle from "../css/Seed.css";

import React from 'react';
import Node from "./Node";
import D from "datascript";
import _ from "lodash";

export default class Seed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        root : {
          title: "My Seed",
          checked: false,
          notes: null,
          childNodes: [0, 1]
        },
        0: {
          title: "Finish working on Sakay",
          checked: false,
          notes: null,
          childNodes: [2, 3]
        },
        1: {
          title: "Finish working on Seed",
          checked: false,
          notes: null,
          childNodes: [4, 5]
        },
        2: {
          title: "Build iOS App",
          checked: false,
          notes: null,
          childNodes: []
        },
        3: {
          title: "Build Android App",
          checked: false,
          notes: null,
          childNodes: []
        },
        4: {
          title: "Finish sample data",
          checked: false,
          notes: null,
          childNodes: []
        },
        5: {
          title: "Finish frontend",
          checked: false,
          notes: null,
          childNodes: []
        }
      }
    }
    this._updateChecked = this._updateChecked.bind(this);
    this._updateTitle = this._updateTitle.bind(this);
    this._deleteNode = this._deleteNode.bind(this);
  }
  _updateChecked(id) {
    var node = this.state.data[id];

    if (!node.childNodes.length) {
      this.setState({data: _.set(this.state.data, id + ".checked", !this.state.data[id].checked)});
    }
  }
  _updateTitle(id, newTitle) {
    this.setState({data: _.set(this.state.data, id + ".title", newTitle)});
  }
  _deleteNode(id, parentId) {
    var newData = _.chain(this.state.data)
      .omit(id)
      .set(parentId + ".childNodes", this.state.data[parentId].childNodes.filter(childNodeKey => childNodeKey !== id))
      .value();
    this.setState({data: newData});
  }
  render() {
    var data = this.state.data;

    var recursiveCheck = function(key) {
      var node = data[key];
      if (node && node.childNodes && node.childNodes.length) {
        return _.reduce(node.childNodes, (accumulator, childNodeKey) => {
          return accumulator && recursiveCheck(childNodeKey);
        }, true);
      } else {
        return node && node.checked;
      }
    }

    var renderTree = function(key, parentID){
      var node = data[key];
      return (
        <Node 
          key={ key } 
          dataID={ key } 
          parentID={ parentID }
          { ...node } 
          checked={ recursiveCheck(key) } 
          onUpdateChecked={ this._updateChecked }
          onUpdateTitle={ this._updateTitle }
          onDeleteNode={ this._deleteNode }>
          { (node && node.childNodes && !!node.childNodes.length) && node.childNodes.map(function(child) {
            return renderTree(child, key);
          })}
        </Node>
      )
    }.bind(this);

    return (
      <div>
        { renderTree("root", null) }
      </div>
    );
  }
}