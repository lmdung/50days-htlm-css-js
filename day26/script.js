const container = document.querySelector('.container');
const slideRight = document.querySelector('.slide-right');
const slideLeft = document.querySelector('.slide-left');

const buttonUp = document.querySelector('.up-btn');
const buttonDown = document.querySelector('.down-btn');
const slideRightLength = slideRight.querySelectorAll('div').length
console.log(slideRightLength)
let currentActive = 0;

slideLeft.style.top = `-${(slideRightLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => slideRun('up'));
buttonDown.addEventListener('click', () => slideRun('down'));
const slideRun = (direction) => {
  if (direction === 'up') {
    currentActive++
    if (currentActive === slideRightLength) {
      currentActive = 0
    }
  }
  if (direction === 'down') {
    currentActive--
    if (currentActive < 0) {
      currentActive = slideRightLength - 1
    }
  }
  slideRight.style.transform = `translateY(-${currentActive * 100}%)`
  slideLeft.style.transform = `translateY(${currentActive * 100}%)`

}