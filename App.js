/***
 *
 *<div id="parent">
 *<div id="child">
 *<h1>I am an H1</h1>
 *</div>
 *
 *
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("div", {}, "I am a h1"),
    React.createElement("div", {}, "I am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("div", {}, "I am a h1 tag"),
    React.createElement("div", {}, "I am h1 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello welcome back to React again"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
