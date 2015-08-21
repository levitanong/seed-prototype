import NodeStyle from "../css/Node.css";

import React from 'react';

export default class Node extends React.Component {
  render() {
    return (
      <div className="Node">
        <h4>{ this.props.checked ? "[x]" : "[ ]"} { this.props.title }</h4>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Node.defaultProps = {
  checked: false,
  title: "",
  notes: null,
  children: null
}