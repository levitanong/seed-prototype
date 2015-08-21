import NodeStyle from "../css/Node.css";

import React from 'react';

export default class Node extends React.Component {
  constructor(props) {
    super(props);
    this._clickhandler = this._clickhandler.bind(this);
  }
  _clickhandler() {
    console.log(this.props.dataID);
  }
  render() {
    return (
      <div className="Node">
        <h4 onClick={ this._clickhandler }>{ this.props.checked ? "[x]" : "[ ]"} { this.props.title }</h4>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Node.defaultProps = {
  dataID: undefined,
  checked: false,
  title: "",
  notes: null,
  children: null
}