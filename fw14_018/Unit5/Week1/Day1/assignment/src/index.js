console.log("Hello World again with alok !");
import("./index.css");
import logo from "./logo.png";
const h1 = document.createElement("h1");
h1.innerText = "Hey buddy";
h1.classList = "redtext";

const img = document.createElement("img");
img.src = logo;


const input = document.createElement("input");
const button = document.createElement("button");
const div = document.createElement("div");
let p = document.createElement("p");

input.classList = "inputfield";
button.innerText = "Submit";

button.addEventListener("click", () => {
  let value = input.value;
  p.innerText = value;

});

div.append(input,button,p)



document.getElementById("root").append(h1, img, div);
