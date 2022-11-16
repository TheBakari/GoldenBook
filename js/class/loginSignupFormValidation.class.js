export class LoginSignupFormValidation {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  emailValidation() {
    const emailRegEx =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = this.email.trim().match(emailRegEx);

    if (this.email === "") {
      return { errorMessage: "Email is required", valid: false };
    }
    if (!validEmail) {
      return { errorMessage: "Email is in invalid format", valid: false };
    }
    return { errorMessage: undefined, valid: true };
  }

  passwordValidation() {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9 @#$%^&*\-_!+=[\]{}|\\:',.?/`~"();<>])(?=.{8,})/;
    const validPass = this.password.trim().match(passwordRegex);

    if (this.password === "") {
      return { errorMessage: "Password is required", valid: false };
    }
    if (!validPass) {
      return { errorMessage: "Password must match requirements", valid: false };
    }

    return { errorMessage: undefined, valid: true };
  }
}
