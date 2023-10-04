const form = document.getElementById('form');
const username = document.getElementById('username');
const project = document.getElementById('project');
const date = document.getElementById('date');
const date2 = document.getElementById('date2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// POP up
let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const projectValue = project.value.trim();
    const dateValue = project.value.trim();
    const date2Value = project.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if(projectValue === '') {
        setError(project, 'Proposal is required');
    } else {
        setSuccess(project);
    }

    // if(dateValue === '') {
    //     setError(date, ' Start Date is required');
    // } else {
    //     setSuccess(date);
    // }

    // if(date2Value === '') {
    //     setError(date2, ' End Date is required');
    // } else {
    //     setSuccess(date2);
    // }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

