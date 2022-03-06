// import { add, mult } from "./clac";

const h1 = document.createElement("h1");
h1.innerText = "Hello Alok kumar!";
h1.classList = "redtext";

const input = document.createElement("input");
input.classList = "inputfield";
const button = document.createElement("button");
const div = document.createElement("div");

button.innerText = "Submit";
let p = document.createElement("p");
button.addEventListener("click", () => {
  let value = input.value;
  p.innerText = value;

});

div.append(input,button,p)

document.getElementById("root").append(h1, div);
