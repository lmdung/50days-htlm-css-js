const fill = document.querySelector('.fill');
const listEmpty = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (let empty of listEmpty) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);

}

function dragStart () {
  console.log('dragstart') // khi element được kéo ra
  fill.className += ' hold';
  setTimeout(() => {
    fill.className = 'invisible';
  }, 0) //set time = 0 thì fn sẽ được thêm vào hàng đợi. Và thực hiện sau
}

function dragEnd () {
   console.log('dragEnd+')
   fill.className = 'fill'
}

function dragOver (e) {
  console.log('dragOver+')
  e.preventDefault();
}
function dragEnter() {
  console.log('dragEnter')
  this.className += ' hovered'

}
function dragLeave() {
  console.log('dragLeave')
  this.className = 'empty'
}
function dragDrop () {
  console.log('dragDrop')
  this.className = 'empty';
  this.appendChild(fill)
}