import { LoginSignupFormValidation } from "./class/loginSignupFormValidation.class.js";
import { COLORS } from "./helpers/colors.js";

/* references to the HTML elements - nodes */
const emailInputField = document.getElementById("email");
const passInputField = document.getElementById("pass");
const signBtn = document.getElementById("signBtn");
const emailTextError = document.getElementById("emailTextError");
const passTextError = document.getElementById("passTextError");
const spinner = document.getElementById("spinnerImg");
const successMessagetext = document.getElementById("successMessage");

/* function to reset all state - styles or value, triggered onSubmit */
const resetInputFields = () => {
  emailInputField.style.border = `1px solid ${COLORS.borderColor}`;
  passInputField.style.border = `1px solid ${COLORS.borderColor}`;
  emailTextError.innerText = "";
  passTextError.innerText = "";
  successMessagetext.innerText = "";
};

/* function to be triggered onSubmit button */
const onSubmit = (e) => {
  e.preventDefault();
  resetInputFields();

  /* class instance */
  const validForm = new LoginSignupFormValidation(
    emailInputField.value,
    passInputField.value
  );

  /* class validation methods */
  const isEmailValid = validForm.emailValidation(emailInputField.value);
  const isPassValid = validForm.passwordValidation(passInputField.value);

  /* displaying proper messages in case fields are not valid */
  if (!isEmailValid.valid) {
    emailInputField.style.border = `2px solid ${COLORS.borderErrorColor}`;
    emailTextError.innerText = isEmailValid.errorMessage;
  }
  if (!isPassValid.valid) {
    passInputField.style.border = `2px solid ${COLORS.borderErrorColor}`;
    passTextError.innerText = isPassValid.errorMessage;
    if (isPassValid.errorMessage !== "Password is required") {
      setTimeout(() => {
        alert(
          "Password Requirements\n-At least 8 characters\n-At least one upper case letter\n-At least one lower case letter\n-At least one number or special character"
        );
      }, 100);
    }
  }

  /* displaying spinner and proper succes message */
  if (isEmailValid.valid && isPassValid.valid) {
    spinner.style.display = "block";
    setTimeout(() => {
      spinner.style.display = "none";
    }, 1500);
    setTimeout(() => {
      successMessagetext.innerText = "Success! You are done";
      emailInputField.value = "";
      passInputField.value = "";
    }, 1600);
  }
};

/* button event listener to listen when user click on submit button */
signBtn.addEventListener("click", (e) => onSubmit(e));
