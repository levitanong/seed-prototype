import React from 'react';
require("./SeedyScript.jsx")

var data = {
  "root" : {
    title: "My Seed",
    checked: false,
    notes: null,
    children: [0, 1]
  },
  0: {
    title: "Finish working on Sakay",
    checked: false,
    notes: null,
    children: [2, 3]
  },
  1: {
    title: "Finish working on Seed",
    checked: false,
    notes: null,
    children: [4, 5]
  },
  2: {
    title: "Build iOS App",
    checked: false,
    notes: null,
    children: null
  },
  3: {
    title: "Build Android App",
    checked: false,
    notes: null,
    children: null
  },
  4: {
    title: "Finish sample data",
    checked: false,
    notes: null,
    children: null
  },
  5: {
    title: "Finish frontend",
    checked: false,
    notes: null,
    children: null
  }
}

export default class Seed extends React.Component {
  render() {
    return (
      <div>
      
      </div>
    );
  }
}