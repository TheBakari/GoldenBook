import { AddBookFormValidationClass } from "./class/addBookFormValidation.class.js";
import { DropdownsLists } from "./class/dropdownsList.class.js";
import {
  authorList,
  catList,
  yearsDropdownList,
} from "./helpers/dropdownListsArrays.js";
import { COLORS } from "./helpers/colors.js";

/* refenrene on input fields */
const imgUrlInput = document.getElementById("imgUrlInput");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const catInput = document.getElementById("catInput");
const isbnInput = document.getElementById("isbnInput");
const dateInput = document.getElementById("dateInput");
const descInput = document.getElementById("descInput");
const submitHtml = document.getElementById("submitHtml");
const spinner = document.getElementById("spinnerImg");

// reference on error fileds
const imgUrlTextError = document.getElementById("imgUrlTextError");
const titleTextError = document.getElementById("titleTextError");
const authorTextError = document.getElementById("authorTextError");
const categoriesTextError = document.getElementById("categoriesTextError");
const yearTextErorr = document.getElementById("yearTextErorr");
const isbnTextError = document.getElementById("isbnTextError");
const decTextError = document.getElementById("decTextError");

/*  lists class instances */
const authorLists = new DropdownsLists(authorList, authorInput);
const categoriesLists = new DropdownsLists(catList, catInput);
const yearLists = new DropdownsLists(yearsDropdownList(), dateInput);

/*  adding lists to select dropdonws menus with methods execution */
authorLists.createListArray();
categoriesLists.createListArray();
yearLists.createListArray();

/* fuction to change decsription placegholder on change author select field */
authorInput.onchange = (e) => {
  descInput.placeholder = e.target.value;
};

const resetInputFields = () => {
  imgUrlInput.style.borderBottom = `1px solid ${COLORS.addBookBottomBorderColor}`;
  titleInput.style.borderBottom = `1px solid ${COLORS.addBookBottomBorderColor}`;
  authorInput.style.borderBottom = `1px solid ${COLORS.addBookBottomBorderColor}`;
  catInput.style.borderBottom = `1px solid ${COLORS.addBookBottomBorderColor}`;
  isbnInput.style.borderBottom = `1px solid ${COLORS.addBookBottomBorderColor}`;
  dateInput.style.borderBottom = `1px solid ${COLORS.addBookBottomBorderColor}`;
  descInput.style.border = `1px solid ${COLORS.borderColor}`;
  imgUrlTextError.innerText = "";
  titleTextError.innerText = "";
  authorTextError.innerText = "";
  categoriesTextError.innerText = "";
  isbnTextError.innerText = "";
  yearTextErorr.innerText = "";
  decTextError.innerText = "";
};

//e is event
const onSubmit = (e) => {
  e.preventDefault();
  resetInputFields();

  /* class instance */
  const formValidation = new AddBookFormValidationClass(
    imgUrlInput.value,
    titleInput.value,
    authorInput.value,
    catInput.value,
    isbnInput.value,
    dateInput.value,
    descInput.value
  );

  /* class validation methods */
  const isImgUrlValid = formValidation.imgValidation();
  const isTitleValid = formValidation.titleValidation();
  const isAutValid = formValidation.authorValidation();
  const isCatValid = formValidation.catValidation();
  const isIsbnValid = formValidation.isbnValidation();
  const isDateValid = formValidation.dateValidation();
  const isDescValid = formValidation.descValidation();

  /* displaying proper messages in case fields are not valid */
  if (!isImgUrlValid.valid) {
    imgUrlInput.style.borderBottom = `1px solid ${COLORS.borderErrorColor}`;
    imgUrlTextError.innerText = isImgUrlValid.errorMessage;
  }
  if (!isTitleValid.valid) {
    titleInput.style.borderBottom = `1px solid ${COLORS.borderErrorColor}`;
    titleTextError.innerText = isTitleValid.errorMessage;
  }
  if (!isAutValid.valid) {
    authorInput.style.borderBottom = `1px solid ${COLORS.borderErrorColor}`;
    authorTextError.innerText = isAutValid.errorMessage;
  }
  if (!isCatValid.valid) {
    catInput.style.borderBottom = `1px solid ${COLORS.borderErrorColor}`;
    categoriesTextError.innerText = isCatValid.errorMessage;
  }

  if (!isIsbnValid.valid) {
    isbnInput.style.borderBottom = `1px solid ${COLORS.borderErrorColor}`;
    isbnTextError.innerText = isIsbnValid.errorMessage;
  }

  if (!isDateValid.valid) {
    dateInput.style.borderBottom = `1px solid ${COLORS.borderErrorColor}`;
    yearTextErorr.innerText = isDateValid.errorMessage;
  }

  if (!isDescValid.valid) {
    descInput.style.border = `1px solid ${COLORS.borderErrorColor}`;
    decTextError.innerText = isDescValid.errorMessage;
  }

  /* displaying spinner and proper succes message */
  if (
    isImgUrlValid.valid &&
    isTitleValid.valid &&
    isAutValid.valid &&
    isCatValid.valid &&
    isDateValid.valid &&
    isIsbnValid.valid &&
    isDateValid.valid
  ) {
    spinner.style.display = "block";
    setTimeout(() => {
      spinner.style.display = "none";
    }, 1500);
    setTimeout(() => {
      window.location.replace("../homepage.html");
    }, 1600);
  }
};

submitHtml.addEventListener("click", (e) => onSubmit(e));
