"use strict";

console.log("app.js running");

//JSX
var template = React.createElement(
  "h1",
  null,
  "Does This is JSX from app.js"
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
