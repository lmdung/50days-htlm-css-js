const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

let activeSlide = 0;

setBgBody();
setBgSlide();

function setBgBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setBgSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}

btnRight.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
  setBgBody();
  setBgSlide();
})
btnLeft.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgBody();
  setBgSlide();
})