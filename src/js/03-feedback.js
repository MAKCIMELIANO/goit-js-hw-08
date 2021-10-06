const { throttle } = require('lodash');

// const STORAGE_KEY = 'feedback-msg';

// const formData = {};

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.textarea.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

// populateTextarea();

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   evt.currentTarget.reset();

//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }

const refs = document.querySelector('.feedback-form');

refs.addEventListener('input', throttle(inputData, 500));
refs.addEventListener('submit', inputSubmit);

if (localStorage.getItem('feedback-form-state')) {
  const parsedItem = JSON.parse(localStorage.getItem('feedback-form-state'));
  refs.querySelector('input').value = parsedItem.email;
  refs.querySelector('textarea').value = parsedItem.message;
}

function inputData() {
  const {
    elements: { email, message },
  } = refs;

  const element = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(element));
}

function inputSubmit(elm) {
  elm.preventDefault();

  const parsedItem = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(parsedItem);
  localStorage.removeItem('feedback-form-state');

  elm.currentTarget.reset();
}
