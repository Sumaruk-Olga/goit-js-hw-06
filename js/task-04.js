// Лічильник складається зі спану і кнопок,
//які по кліку повинні збільшувати і зменшувати
// його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
//або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const refs = {
    counterValue: document.querySelector('#value').textContent,
    decrementButton: document.querySelector('button[data-action="decrement"]'),
    incrementButton: document.querySelector('button[data-action="increment"]'),
};

refs.counterValue = 0;

console.log(refs.counterValue);
console.log(refs.counterValue === 0);

console.log(refs.decrementButton); 
console.log(refs.decrementButton.dataset.action); 

console.log(refs.incrementButton); 
console.log(refs.incrementButton.dataset.action); 



