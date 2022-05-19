// Напиши скрипт, який під час набору тексту в інпуті
//input#name - input(подія input), підставляє його поточне
//значення в span#name - output.Якщо інпут порожній, у спані
//повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter
// your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

// console.log('input', refs.input);
// console.log('span', refs.span.textContent);

refs.input.addEventListener('input', (event) => { 
    refs.span.textContent = event.currentTarget.value;
    // console.log(event.currentTarget.value);
    // console.log(refs.span.textContent);

});