export const authorList = [
  "Agata Kristi",
  "Daniel Defo",
  "William Shaekspir",
  "Luisa Hey",
  "Albert Kami",
  "Lav Tolstoj",
];

export const catList = ["Drama", "Thriller", "Comedy", "Modern Psyhology"];

export const yearsDropdownList = () => {
  let yearArray = [];
  for (let i = 2010; i < 2030; i++) {
    yearArray.push(i);
  }

  return yearArray;
};
