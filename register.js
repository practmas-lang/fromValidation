const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const fullNameError = document.getElementById("full-name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const repasswordError = document.getElementById("repassword-error");

function validateEmail(val) {
  const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patt.test(val);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valuFullname = fullName.value.trim();
  const valueEmail = email.value.trim();
  const valuePassword = password.value.trim();
  const valueRepassword = repassword.value.trim();

  if (!valuFullname && !valueEmail && !valuePassword && !valueRepassword) {
    fullNameError.textContent = "Required Fullname";
    emailError.textContent = "Required Email";
    passwordError.textContent = "Required password ";
    repasswordError.textContent = "Required Re-password ";
  } else if (!validateEmail(valueEmail)) {
    emailError.textContent = "invalid Email";
  } else if (valuePassword !== valueRepassword) {
    repasswordError.textContent = "The passwords are not the same.";
  } else {
    emailError.textContent = "";
    passwordError.textContent = "";
    fullNameError.textContent = "";
    repasswordError.textContent = "";

    alert("Login Succesfull");
  }
});
