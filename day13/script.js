const tags = document.querySelector('.tags');
const textInput = document.querySelector('#textarea');

textInput.addEventListener('keyup', (e) => {
  createTag(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10)
    randomSelect();
  }
})

createTag = (value) => {
  const tagEl = value.split(',').filter(e => e.trim() !== '').map(el => el.trim());
  tags.innerHTML = '';
  tagEl.forEach(tag => {
    const el = document.createElement('div');
    el.innerText = tag;
    el.classList.add('tag');
    tags.appendChild(el)
  })
}

randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag(); 
    highlightTag(randomTag)
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const selectTag = pickRandomTag();
      highlightTag(selectTag)
    }, 100)
  }, times*100)
}

pickRandomTag = () => {
  const allTags = document.querySelectorAll('.tag');
  const randomIdx = Math.floor(Math.random() * allTags.length)
  return allTags[randomIdx]
}

highlightTag = (tag) => {
  tag.classList.add('highlight');
}
unHighlightTag = (tag) => {
  tag.classList.remove('highlight');
}