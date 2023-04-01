const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");
console.log(list);

ingredients.forEach((el) => {
  const lishka = document.createElement("li");
  lishka.textContent = el;
  lishka.classList.add("item");
  list.append(lishka);
});
