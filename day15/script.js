const counter = document.querySelectorAll('.counter');

counter.forEach(element => {
  element.innerText = '0';
  updateCounter(element);
})

function updateCounter (element) {
  const counterMax = +element.getAttribute('data-target');
  const increment = Math.ceil(counterMax/150);
  const currentCounter = +element.innerText
  if (currentCounter < counterMax) {
    element.innerText = `${currentCounter + increment}`
    setTimeout(() => {
      updateCounter(element)
    }, 1)
  } else {
    element.innerText = `${counterMax}`
  }
}