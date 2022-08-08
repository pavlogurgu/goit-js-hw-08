import throttle from 'lodash.throttle';

const formRefs = document.querySelector(".feedback-form");
const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);

fillForm()

formRefs.addEventListener('input', throttle(addDataToLocalStorageHandler, 500));
formRefs.addEventListener('submit', clearFormHandler);

function fillForm() {
    if (savedData === null || savedData === undefined) return;
    if (savedData !== null || savedData !== undefined) {
      formRefs.elements.email.value = parsedData.email;
      formRefs.elements.message.value = parsedData.message;
    }
  }


  function addDataToLocalStorageHandler(e) {
    e.preventDefault();
    let data = {};
    const formData = new FormData(formRefs);
    formData.forEach((value, name) => {
      data[name] = value;
    });

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }

  function clearFormHandler(e) {
    e.preventDefault();
  
    console.log(parsedData);
    // if (formRefs.value === ''){
      window.alert("Ти даун")
    // } else{
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    // }
  }
 
