const loginForm = document.querySelector('.login-form');

const emailInput = loginForm.querySelector('input[type="email"]');
emailInput.classList.add('input');

const passwordInput = loginForm.querySelector('input[type="password"]');
passwordInput.classList.add('input');

const buttonForm = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;

  const infoFromForm = {
    email: elements.email.value,
    password: elements.password.value,
  };
  if (!elements.email.value || !elements.password.value) {
    alert('All form fields must be filled in');
  } else {
    console.log(infoFromForm);
    loginForm.reset();
  }
}
