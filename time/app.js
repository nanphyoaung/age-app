const form = document.querySelector("form");
let inputday = document.querySelector("#day");
let inputmonth = document.querySelector("#month");
let inputyear = document.querySelector("#year");
const btn = document.querySelector(".btn");
let outputY = document.querySelector("#outputY");
let outputD = document.querySelector("#outputD");
let outputM = document.querySelector("#outputM");

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

form.addEventListener("submit", handalar);

function validate() {
  let validator = true;
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (!input.value) {
      input.style.borderColor = "red";
      validator = false;
    } else if (inputmonth.value > 12) {
      input.style.borderColor = "red";
      validator = false;
    } else if (inputday.value > 31) {
      input.style.borderColor = "red";
      validator = false;
    } else if (inputyear.value > year) {
      input.style.borderColor = "red";
      validator = false;
    } else {
      input.style.borderColor = "gray";
      validator = true;
    }
  });
  return validator;
}

function handalar(e) {
  e.preventDefault();
  if (validate()) {
    if (inputday.value > day) {
      day = day + month;
      month = month - 1;
    }
    if (inputmonth.value > month) {
      month = month + 12;
      year = year - 1;
    }
    const d = day - inputday.value;
    const m = month - inputmonth.value;
    const y = year - inputyear.value;
    outputD.innerHTML = d;
    outputM.innerHTML = m;
    outputY.innerHTML = y;
  }
}
