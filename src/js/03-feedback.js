
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveInputMessage, 500));
form.addEventListener('submit', submitMessage);

function saveInputMessage(event) {
  const saveFormInput = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveFormInput));
  } catch (error) {
    console.error('error: ', error.message);
  }
}


function submitMessage(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Заповніть всі поля! ');
  }
  console.log({ email: email.value, message: message.value });

  event.currentTarget.reset();
  localStorage.clear();
}

function savedForm() {
  try {
    const storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (storage !== null) {
      email.value = storage.email;
      message.value = storage.message;
    }
  } catch (error) {
    console.error('error: ', error.message);
  }
}
savedForm();