let container = document.querySelector(".container");
let count = 1;
const displayData = () => {
  let page = 1;
  while (page <= 25) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = `Masai School ${count}`;
    div.append(p);
    container.append(div);
    count++;
    page++;
  }
};
displayData();
container.addEventListener("scroll", () => {
  setTimeout(() => {
    if (
      container.scrollHeight - container.scrollTop - container.clientHeight <
      1
    ) {
      displayData();
      console.log("Reached");
    }
  }, 500);
});
