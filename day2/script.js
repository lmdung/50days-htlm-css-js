const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const circleLength = circles.length;
console.log(circleLength)
let currentActive = 1;
next.addEventListener('click', () => {
  currentActive++;
  circles.forEach((circle, i) => {
    if (currentActive === (i+ 1)) {
      setTimeout(() => {
        circle.classList.add('active');
      }, 300);
    }
    
  })
  
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circleLength) {
    prev.disabled = false;
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  const withProgress = `${(currentActive -1)/(circleLength - 1)*100}%`;
  progress.style.width = withProgress;
})
prev.addEventListener('click', () => {
  currentActive--;
  circles.forEach((circle, i) => {
    if (currentActive === i) {
      setTimeout(() => {
        circle.classList.remove('active');
      }, 100);
    }
  })
  
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circleLength) {
    prev.disabled = false;
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  const withProgress = `${(currentActive -1)/(circleLength - 1)*100}%`;
  progress.style.width = withProgress;
})