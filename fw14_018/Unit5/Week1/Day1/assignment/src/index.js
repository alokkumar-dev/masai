console.log("Hello World again with alok !");
import("./index.css");
import logo from "./logo.png";
const h1 = document.createElement("h1");
h1.innerText = "Hey buddy";
h1.classList = "redtext";

const img = document.createElement("img");
img.src = logo;


document.getElementById("root").append(h1, img);
