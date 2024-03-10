const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach(item => {
  const categoryTitle = item.querySelector('h2');
  const elementsNumber = item.querySelectorAll('li');
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${elementsNumber.length}`);
});
