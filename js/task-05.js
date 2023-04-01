const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultName = "Anonymous";
input.addEventListener("input", inputListener);
function inputListener(event) {
  output.textContent = input.value || defaultName;
}
