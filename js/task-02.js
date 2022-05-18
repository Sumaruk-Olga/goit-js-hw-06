
// Напиши скрипт, який для кожного елемента
// масиву ingredients:

// Створить окремий елемент <li>. 
//Обов'язково використовуй метод 
//document.createElement().
// Додасть назву інгредієнта як його
// текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну
// операцію у список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
// console.log(list);


const allListElements = ingredients.map(ingredient => {
  const listElement = document.createElement('li');

  listElement.textContent = ingredient;
  listElement.classList.add('item');

  return listElement;

 
});

list.append(...allListElements);