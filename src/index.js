import Button from "./components/Button";
import Header from "./components/Header";

const root = document.getElementById("root");
// in React the root div is the mounting point

// use javascript to generate html

const state = {
  msg: "Hello World",
  txt: "Click Me Button",
  buttons: Array.from({ length: 100 }, (_, i) => i + 1),
};

function renderButtons(buttons) {
  return buttons.map((buttonNum) => Button({ txt: buttonNum })).join("\n");
}

function render() {
  // return Header(props);
  return `<main class="container mx-auto flex flex-col">
  ${Header(state)}
  ${renderButtons(state.buttons)}
  </main>`;
}
// root.innerHTML = "<h1 class='text-red-500'>Hello World</h1>";

root.innerHTML = render();
// in react a component is a function
