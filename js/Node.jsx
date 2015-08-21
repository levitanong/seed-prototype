import NodeStyle from "../css/Node.css";

import React from 'react';

export default class Node extends React.Component {
  constructor(props) {
    super(props);
    this._clickhandler = this._clickhandler.bind(this);
    this._changeTitleHandler = this._changeTitleHandler.bind(this);
    this._keyDownHandler = this._keyDownHandler.bind(this);
  }
  _clickhandler() {
    // console.log(this.props.dataID);
    this.props.onUpdateChecked(this.props.dataID);
  }
  _changeTitleHandler(event) {
    this.props.onUpdateTitle(this.props.dataID, event.target.value);
  }
  _keyDownHandler(event){
    switch(event.key) {
      case "Backspace":
        if (this.props.title === "") {
          // console.log(event.key);
          this.props.onDeleteNode(this.props.dataID, this.props.parentID);
          event.preventDefault();
        }
        break;
      case "Enter": 
        console.log("make a new sibling. if already have children, make a new child");
        if (this.props.childNodes.length) {
          this.props.onMakeChildNode(this.props.dataID, 0);
        } else {
          this.props.onMakeChildNode(this.props.parentID, this.props.index + 1);
        }
        break;
      default:
        console.log("wala");
    }
  }
  render() {

    return (
      <div className="Node">
        <span onClick={ this._clickhandler }>{ this.props.checked ? "[x]" : "[ ]"}</span>
        <input value={ this.props.title } onChange={ this._changeTitleHandler } onKeyDown={ this._keyDownHandler } />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Node.defaultProps = {
  index: undefined,
  dataID: undefined,
  parentID: null,
  checked: false,
  title: "",
  notes: null,
  children: null
}

Node.propTypes = {
  onUpdateChecked: React.PropTypes.func,
  onUpdateTitle: React.PropTypes.func,
  onDeleteNode: React.PropTypes.func,
  onMakeChildNode: React.PropTypes.func
}