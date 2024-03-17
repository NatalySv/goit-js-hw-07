const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const trimmedValue = event.currentTarget.value.trim();

  textOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
