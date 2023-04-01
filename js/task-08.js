const loginForm = document.querySelector(".login-form");
const loginFormElements = loginForm.elements;
const inputValues = {};
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

loginForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All input fields, have to be filled");
  } else {
    inputValues.email = loginFormElements["email"].value;
    inputValues.password = loginFormElements["password"].value;
    loginForm.reset();
    console.log(inputValues);
  }
  event.preventDefault();
}
