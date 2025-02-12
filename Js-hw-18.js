// Task 1
const categories = document.querySelectorAll("#categories > li");

console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.firstElementChild;
  const liItem = category.querySelectorAll("h3");

  console.log(`Категорія: ${title.textContent}`);
  console.log(`Кількість елементів: ${liItem.length}`);
});
// Task 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((vegetable) => {
  const vegetableLi = document.createElement("li");
  vegetableLi.textContent = vegetable;
  list.append(vegetableLi);
});
console.log(list);
// Task 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesElem = images.map((img) => 
  `    <li class="img-item">
      <img class="item-photo" src="${img.url}" alt="${img.alt}">
    </li>`).join("");

console.log(imagesElem)
const galaryList = document.querySelector("#gallery");

galaryList.insertAdjacentHTML("beforeend", imagesElem);
// Task 4
const button1 = document.querySelector("[data-action=decrement]");
const span = document.querySelector("#value");
const button2 = document.querySelector("[data-action=increment]");

let result = 0;

button2.addEventListener("click", (event) => {
  return (span.textContent = result += 1);
});

button1.addEventListener("click", (event) => {
  return (span.textContent = result -= 1);
});