const heading = React.createElement("h1", { id: "heading" }, "Hello Swapnil");
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h3", {}, "I am h3 Tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h3", {}, "I am h3 Tag"),
  ])],
);
root.render(parent);
