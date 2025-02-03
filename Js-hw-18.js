// Task 1
const categories = document.querySelectorAll("#categories > li");

console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.firstChild.textContent.trim("cho");
  const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});