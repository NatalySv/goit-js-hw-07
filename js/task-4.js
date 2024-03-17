const loginForm = document.querySelector('.login-form');

const emailInput = loginForm.querySelector('input[type="email"]');
emailInput.classList.add('input');
emailInput.setAttribute('autocomplete', 'off');

const passwordInput = loginForm.querySelector('input[type="password"]');
passwordInput.classList.add('input');
passwordInput.setAttribute('autocomplete', 'off');

const buttonForm = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;

  if (!elements.email.value || !elements.password.value) {
    alert('All form fields must be filled in');
  } else {
    const infoFromForm = {
      email: elements.email.value.trim(),
      password: elements.password.value.trim(),
    };
    console.log(infoFromForm);
    loginForm.reset();
  }
}
