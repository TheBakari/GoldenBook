export class FormValidation {
  constructor() {}

  emailValidation(email) {
    let htmlText = "";
    const emailRegEx =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = email.trim().match(emailRegEx);
    if (email === "") {
      //console.log("Email is empty");
      return (htmlText = "Email is empty");
    }
    if (!validEmail) {
      //console.log("Email is invalid");
      return (htmlText = "Email is invalid");
    }
    return htmlText;
  }

  passwordValidation(password) {
    let htmlText = "";
    const passRegEx = /^[A-Za-z]\w{7,14}$/;

    const validPass = password.match(passRegEx);
    console.log(validPass);
    if (password === "") {
      //console.log("Password is empty");
      return (htmlText = "Password is empty");
    }
    if (password.length < 8) {
      //console.log("Your password needs to have atlese 8 charachters");
      return (htmlText = "Your password needs to have atlese 8 charachters");
    }
    if (!validPass) {
      //console.log("Passwrd must match req");
      return (htmlText = "Passwrd must match req");
    }

    return htmlText;
  }

  imgValidation(imgUrl) {
    let htmlText = "";
    //regex za praveru URL formata moguce uneti i IP adresu
    const imgRegEx =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    const isValidUrl = imgUrl.trim().match(imgRegEx);
    if (imgUrl === "") {
      htmlText = "Url must be req";
      return htmlText;
    }
    if (!isValidUrl) {
      htmlText = "Url must be valid format";
      return htmlText;
    }
    return htmlText;
  }

  titleValidation(titleUrl) {
    let htmlText = "";
    if (titleUrl === "") {
      htmlText = "Title is req";
      return htmlText;
    }
    if (titleUrl.length > 10 && titleUrl.length < 51) {
      htmlText = "Title must be bettween 10 and 50 characters";
      return htmlText;
    }
    const isTitleUppercase =
      titleUrl.charAt(0) === titleUrl.charAt(0).toUpperCase();
    if (!isTitleUppercase) {
      htmlText = "Frist char must be Upper case";
      return htmlText;
    }
    return htmlText;
  }

  authorValidation(authorUrl) {
    let htmlText = "";
    if (authorUrl === "") {
      htmlText = "Author is req";
      return htmlText;
    }
  }

  catValidation(catUrl) {
    let htmlText = "";
    if (catUrl === "") {
      htmlText = "Category is req";
      return htmlText;
    }
  }

  isbnValidation(isbnUrl) {
    let htmlText = "";
    if (isbnUrl === "") {
      htmlText = "ISBN is req";
      return htmlText;
    }
  }

  dateValidation(dateUrl) {
    let htmlText = "";
    if (dateUrl === "") {
      htmlText = "Date is req";
      return htmlText;
    }
  }

  descValidation(descUrl) {
    let htmlText = "";
    if (descUrl === "") {
      htmlText = "Description is req";
      return htmlText;
    }
  }
}
