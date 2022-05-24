import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".feedback-form input");
const textarea= document.querySelector(".feedback-form textarea"); 

const fromKey = "feedback-form-state";
const filledForm = localStorage.getItem(fromKey);
const parsedFormValue = JSON.parse(filledForm);

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

updateData();

function updateData() {
    if (filledForm) {
        input.value = parsedFormValue.email;
        textarea.value = parsedFormValue.message;
    }
};

function onFormInput(event) {
    const fromValue = {
        email: input.value,
        message: textarea.value,
    }
    localStorage.setItem(fromKey, JSON.stringify(fromValue));
};

function onFormSubmit(event) {
    event.preventDefault();
    const fromValue = {
        email: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
    };
    if (fromValue.email === "" || fromValue.message === "") {
        return;
    }
    console.log(fromValue);
    event.currentTarget.reset();
    localStorage.clear();
}
