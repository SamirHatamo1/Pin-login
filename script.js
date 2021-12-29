const input = document.querySelector("#input");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const checker = document.querySelector("#checker");
const clear = document.querySelector("#clear");
const view = document.querySelector("#viewPassword");

let arr = [];
let arrCorrect = ["8", "6", "1", "4"];

one.addEventListener("click", () => {
  arr.push(one.value);
  input.value = this.one.value;
});

two.addEventListener("click", () => {
  arr.push(two.value);
  input.value = this.two.value;
});

three.addEventListener("click", () => {
  arr.push(three.value);
  input.value = this.three.value;
});

four.addEventListener("click", () => {
  arr.push(four.value);
  input.value = this.four.value;
});

five.addEventListener("click", () => {
  arr.push(five.value);
  input.value = this.five.value;
});

six.addEventListener("click", () => {
  arr.push(six.value);
  input.value = this.six.value;
});

seven.addEventListener("click", () => {
  arr.push(seven.value);
  input.value = this.seven.value;
});

eight.addEventListener("click", () => {
  arr.push(eight.value);
  input.value = this.eight.value;
});

nine.addEventListener("click", () => {
  arr.push(nine.value);
  input.value = this.nine.value;
});

zero.addEventListener("click", () => {
  arr.push(zero.value);
  input.value = this.zero.value;
});

clear.addEventListener("click", () => {
  arr.pop();
  console.log(arr);
});

checker.addEventListener("click", () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrCorrect.length; j++) {
      if (arr[i] === arrCorrect[j]) {
        input.value = "Correct";
      } else input.value = "Incorrect";
    }
  }
});

view.addEventListener("click", () => {
  input.value = arr;
});
