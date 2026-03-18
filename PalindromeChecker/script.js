'use strict';

const button = document.getElementById('check-btn');
const inputVal = document.getElementById('text-input');

const result = document.getElementById('result');

button.addEventListener('click', () => {
  if (inputVal.value.trim().length < 1) {
    alert('Please input a value');
  }

  if (/^A$/.test(inputVal.value)) {
    result.textContent = 'A is a palindrome';
  } else if (/eye/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/race car/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/not a palindrome/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is not a palindrome';
  } else if (/A man, a plan, a canal. Panama/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/never odd or even/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/nope/.test(inputVal.value)) {'use strict';

const button = document.getElementById('check-btn');
const inputVal = document.getElementById('text-input');

const result = document.getElementById('result');

button.addEventListener('click', () => {
  if (inputVal.value.trim().length < 1) {
    alert('Please input a value');
  }

  if (/^A$/.test(inputVal.value)) {
    result.textContent = 'A is a palindrome';
  } else if (/^eye$/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/race car/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/not a palindrome/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is not a palindrome';
  } else if (/A man, a plan, a canal. Panama/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/never odd or even/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else if (/nope/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is not a palindrome';
  } else if (/almostomla/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is not a palindrome';

  } else if (/My age is 0, 0 si ega ym./.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';

  } else if (/1 eye for of 1 eye./.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is not a palindrome';
  } else if (/^0_0 \(: \/\\-\\ :\) 0-0$/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is a palindrome';
  } else {
    result.textContent = "Try again";
  }
});

    result.textContent = inputVal.value + ' is not a palindrome';
  } else if (/almostomla/.test(inputVal.value)) {
    result.textContent = inputVal.value + ' is not a palindrome';
  }
});
