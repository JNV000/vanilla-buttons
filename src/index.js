import Header from "./components/Header";

const root = document.getElementById("root");
// in React the root div is the mounting point

// use javascript to generate html

function render() {
  return Header();
}
// root.innerHTML = "<h1 class='text-red-500'>Hello World</h1>";

root.innerHTML = render();
// in react a component is a function
