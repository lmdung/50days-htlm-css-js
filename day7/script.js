const leftPage = document.querySelector('.left');
const rightPage = document.querySelector('.right');
const container = document.querySelector('.container');


leftPage.addEventListener('mouseenter', () => container.classList.add('hover-left'));
leftPage.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

rightPage.addEventListener('mouseenter', () => container.classList.add('hover-right'));
rightPage.addEventListener('mouseleave', () => container.classList.remove('hover-right'));