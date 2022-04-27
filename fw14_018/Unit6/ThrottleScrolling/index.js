let timer;
let container = document.querySelector(".container");
container.addEventListener("scroll", () => {
  let apiCall = document.querySelector("#show-api-call-count");
  let apiCallCount = apiCall.innerHTML || 0;
  apiCallCount = Number(apiCallCount) + 1;
  apiCall.innerHTML = apiCallCount;
  throttleFunction(normalfunction, 300);
});
function normalfunction() {
  let throttle_count = document.getElementById("debounc_count");

  let count = throttle_count.innerHTML || 0;

  throttle_count.innerHTML = Number(count) + 1;
}

let throttleFunction = (func, delay) => {
  if (timer) return;

  timer = setTimeout(() => {
    func();
    timer = undefined;
  }, delay);
};