const boxContent = document.querySelectorAll('.box');

window.addEventListener('scroll', () => onWindowScrollHandler());

onWindowScrollHandler = () => {
  const viewHeight = window.innerHeight * 0.8;
  boxContent.forEach(box => {
    const boxPosition = box.getBoundingClientRect().top; // vi tri cua box voi khung hinh
    if (boxPosition < viewHeight) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}