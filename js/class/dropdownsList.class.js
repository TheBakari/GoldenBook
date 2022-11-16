export class DropdownsLists {
  constructor(listArray, htmlElement) {
    this.listArray = listArray;
    this.htmlElement = htmlElement;
  }

  createListArray() {
    this.listArray.map((list) => {
      this.htmlElement.innerHTML += `<option value="${list}">${list}</option>`;
    });
  }
}
