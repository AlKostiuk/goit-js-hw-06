function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputQuantity = document.querySelector('input[type="number"]');

createBtn.addEventListener("click", handleCreateBoxes);
destroyBtn.addEventListener("click", handleDestroyBoxex);

const firstBox = 30;

function handleCreateBoxes() {
  const quantityOfBoxes = inputQuantity.value;
  boxContainer.innerHTML = "";
  createBoxes(quantityOfBoxes);
}
function createBoxes(amount) {
  let currentSize = firstBox;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = currentSize + "px";
    box.style.height = currentSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.append(box);
    currentSize += 10;
  }
}

function handleDestroyBoxex() {
  boxContainer.innerHTML = "";
}
