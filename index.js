const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

const form = document.getElementById('access-form');
const email = document.getElementById('access-email');
const error = document.getElementById('access-error');
const errorMessage = "Please enter a valid email address";

form.addEventListener('submit', (e) => {
    
    error.innerText = '';

    if(!email.value || !emailValidationRegex.test(email.value)) {
        e.preventDefault();
        error.innerText = errorMessage;
    }
})