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
    counterValue: document.querySelector('#value'),
    decrementButton: document.querySelector('button[data-action="decrement"]'),
    incrementButton: document.querySelector('button[data-action="increment"]'),
};
let value = 0;

function handlerDecrementClick  (event)  {
    value -= 1;
    // console.log('hi', value);
    refs.counterValue.textContent = value;
    // console.log(refs.counterValue.textContent);
};

function handlerIncrementClick  (event)  {
    value +=1;
    // console.log('hi', value);    
    refs.counterValue.textContent = value;
    // console.log(refs.counterValue.textContent);
};

refs.decrementButton.addEventListener('click', handlerDecrementClick);
refs.incrementButton.addEventListener('click', handlerIncrementClick);

