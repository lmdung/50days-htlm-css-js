const container = document.querySelector('.container');
const openNav = document.querySelector('#open');
const closeNav = document.querySelector('#close');
const inputBtn = document.querySelector('.content .search button');
const inputSearch = document.querySelector('.content .search');
const input = document.querySelector('.content .search input');
const loading = document.querySelector('.loading');
const loadingText = document.querySelector('.loading .loading-text');

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};
runAllEvents();
let load = 0;
let int = setInterval(() => blurring(), 30);

const scale = (number,inMin, inMax, outMin, outMax) => {
  // if you need an integer value use Math.floor or Math.ceil here
  return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

function runAllEvents() {
  openNav.addEventListener('click', () => {
    container.classList.add('show-nav')
  })
  closeNav.addEventListener('click', () => {
    container.classList.remove('show-nav')
  })
  inputBtn.addEventListener('click', () => {
    inputSearch.classList.toggle('active');
    input.focus();
  })
}

blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int)
    loading.style.display = 'none';
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}