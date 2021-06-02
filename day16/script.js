const cupSmall = document.querySelectorAll('.cup-small');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const liters = document.querySelector('.liters');

cupSmall.forEach((cup, i) => {
  cup.addEventListener('click', () => {
    highlightCup(i);
  })
})

highlightCup = (index) => {
  if (cupSmall[index].classList.contains('fully') 
  && !cupSmall[index].nextElementSibling.classList.contains('fully')) {
    index--;
  }
  cupSmall.forEach((cup, i) => {
    if (i <= index) {
      cup.classList.add('fully')
    } else {
      cup.classList.remove('fully')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const totalCups = document.querySelectorAll('.cup-small.fully').length;
  const allCups = cupSmall.length;

  if (totalCups === 0) {
    percentage.style.height = 0;
  } else {
    percentage.style.height = `${totalCups/allCups*100}%`
    percentage.innerText = `${totalCups/allCups*100}%`
    liters.innerText = `${2-(250*totalCups/1000)}L`
  }
  if (totalCups === allCups) {
    remained.style.height = 0;
  }
}