const form = document.querySelector("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
const sigIn = document.getElementById("signin");

function validateEmail(val) {
  const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patt.test(val);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueEmail = email.value.trim();
  const valuePassword = password.value.trim();

  if (!valueEmail && !valuePassword) {
    emailError.textContent = "Email Required";
    passwordError.textContent = "Password Required";
  } else if (!validateEmail(valueEmail)) {
    emailError.textContent = "invalid Email";
  } else {
    emailError.textContent = "";
    passwordError.textContent = "";

    alert("Login Succesfull");
  }
});
