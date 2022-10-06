/*
function Header() {
  return "<h1 class='text-red-500'>Hello World</h1>";
}
*/

function Header(msg = "Hello World") {
  return `<h1 class='text-red-500'>${msg}</h1>`;
}

export default Header;
