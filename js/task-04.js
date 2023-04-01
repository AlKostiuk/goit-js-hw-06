let counterValue = 0;
const currentValue = document.querySelector("#value");
const decButton = document.querySelector('[data-action="decrement"]');
const incButton = document.querySelector('[data-action="increment"]');
decButton.addEventListener("click", decrementor);
function decrementor() {
  currentValue.textContent = counterValue--;
  console.log(counterValue);
}
incButton.addEventListener("click", incrementor);
function incrementor() {
  currentValue.textContent = counterValue++;
  console.log(counterValue);
}
