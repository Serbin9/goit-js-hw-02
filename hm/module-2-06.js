"use strict";
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не числоб попробуйте еще раз");
  } else {
    if (input !== null) {
      numbers.push(Number(input));
    }
  }
}
for (let i = 0; i < numbers.length; i++) {
  total += (numbers[i]);
}
console.log(numbers);
alert(`Общая сумма чисел равна ${total}`);
