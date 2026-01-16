const getBtn = document.querySelectorAll('.favorite-icon');

getBtn.forEach((btn) => {
  btn.addEventListener('click', () => checkFilled(btn))
})


function checkFilled(btn) {
  if (btn.classList.contains('filled') === false) {
    btn.setAttribute("class", "filled")
    btn.innerHTML = "&#10084;"
  } else {
    btn.removeAttribute("filled")
    btn.innerHTML = "&#9825;"
  }
}