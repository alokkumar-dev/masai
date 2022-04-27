let togglerDiv = document.querySelector(".togglerDiv");
let changeColorBtn = document.querySelector(".changeColorBtn");
togglerDiv.innerHTML = 1;

changeColorBtn.addEventListener("click", () => {
  if (togglerDiv.innerHTML == 1) {
    togglerDiv.innerHTML = 2;
    togglerDiv.style.backgroundColor = "#92A8D1";
  } else if (togglerDiv.innerHTML == 2) {
    togglerDiv.innerHTML = 3;
    togglerDiv.style.backgroundColor = "limeGreen";
  } else if (togglerDiv.innerHTML == 3) {
    togglerDiv.innerHTML = 1;
    togglerDiv.style.backgroundColor = "#FF6F61";
  }
});