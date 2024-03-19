//ReactElements are object converts into HTML which the browser can understand
//ReactElements(object) => HTML(Browser understand)
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Im H1 tag"),
    React.createElement("h1", { id: "heading" }, "Im H1 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hare Krishna"),
    React.createElement("h1", { id: "heading" }, "Im H1 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
