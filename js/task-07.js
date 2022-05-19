// Напиши скрипт, який реагує на зміну значення input#font-size-control
//(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
//font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір
//тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
    inputSizeControl: document.querySelector('#font-size-control'),
    textToChange: document.querySelector('#text'),
} 

// console.log(refs.inputSizeControl.value);
// console.log(refs.textToChange.style.fontSize);

refs.inputSizeControl.addEventListener('input', changeTextSize);

function changeTextSize(event) {
    // console.log(refs.inputSizeControl.value);
    refs.textToChange.style.fontSize = `${refs.inputSizeControl.value}px`;
};