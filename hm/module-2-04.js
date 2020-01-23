"use strict";
const formatString = function(string) {
  let formatString = string.length;
  if (string.length > 40) {
    formatString = string.slice(0, 40);
    formatString = formatString + "...";
    return formatString;
  } else {
    return string;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);