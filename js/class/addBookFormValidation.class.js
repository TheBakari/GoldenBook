export class AddBookFormValidationClass {
  constructor(imgUrl, title, author, categories, isbn, date, description) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.author = author;
    this.author = author;
    this.categories = categories;
    this.isbn = isbn;
    this.date = date;
    this.description = description;
  }

  imgValidation() {
    const imgRegEx =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    const isValidUrl = this.imgUrl.trim().match(imgRegEx);

    if (this.imgUrl === "") {
      return { errorMessage: "Img is required", valid: false };
    }

    if (!isValidUrl) {
      return { errorMessage: "Img URL must be in valid format", valid: false };
    }
    return { errorMessage: undefined, valid: true };
  }

  titleValidation() {
    if (this.title === "") {
      return { errorMessage: "Title is required", valid: false };
    }

    if (this.title.length < 10 || this.title.length > 51) {
      return {
        errorMessage: "Title must be bettween 10 and 50 characters",
        valid: false,
      };
    }

    const isTitleUppercase =
      this.title.charAt(0) === this.title.charAt(0).toUpperCase();
    if (!isTitleUppercase) {
      return {
        errorMessage: "First letter nedd to start with upper case",
        valid: false,
      };
    }
    return { errorMessage: undefined, valid: true };
  }

  authorValidation() {
    if (this.author === "") {
      return { errorMessage: "Author is required", valid: false };
    }
    return { errorMessage: undefined, valid: true };
  }

  catValidation() {
    if (this.categories === "") {
      return { errorMessage: "Category is required", valid: false };
    }
    return { errorMessage: undefined, valid: true };
  }

  isbnValidation() {
    if (this.isbn === "") {
      return { errorMessage: "ISBN is required", valid: false };
    }
    return { errorMessage: undefined, valid: true };
  }

  dateValidation() {
    const selectedYear = this.date;
    const today = 2022;
    if (this.date === "") {
      return { errorMessage: "Year is required", valid: false };
    }

    if (selectedYear < today) {
      return { errorMessage: "Selected year can't be in past", valid: false };
    }

    return { errorMessage: undefined, valid: true };
  }

  descValidation() {
    if (this.description === "") {
      return { errorMessage: "Description is required", valid: false };
    }

    if (this.description.length > 250) {
      return {
        errorMessage: "Description must be maximum 250 characters long",
        valid: false,
      };
    }
    return { errorMessage: undefined, valid: true };
  }
}
