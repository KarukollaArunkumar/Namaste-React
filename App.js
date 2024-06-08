/* 
<div id =" parent" >
<div id = "child">
<h1> " i am first child"</h1>
</div


</div>


*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("child", { id: "child" }, [
    React.createElement("h1",{}," i am first child")
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
