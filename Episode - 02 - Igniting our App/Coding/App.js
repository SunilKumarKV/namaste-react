import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";

//React.createElement is a JS Object
const parent = React.createElement(
  "div", //Which tag to be created?
  { id: "parent" }, //attributes
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ])
); //what to display?

//Rendering react
const root = createRoot(document.getElementById("root"));

/*
render() => renders a JS object(heading) and 
creates the tag which browser understands puts it up in the DOM.
*/
root.render(parent);

console.log(parent); //Object
