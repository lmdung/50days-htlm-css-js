const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e2b0d7aae120a125cab65740b4f15c21&page=1';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=e2b0d7aae120a125cab65740b4f15c21&query="'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280'

const form = document.querySelector('#form-search');
const search = document.querySelector('#search');
const main = document.querySelector('main');

getMovies(API_URL);

async function getMovies(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data)
  showMovies(data.results)
}
showMovies = (movies) => {
  main.innerHTML = '';
  movies.forEach(movie => {
    const {title, overview, poster_path, vote_average } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img 
        src=${IMAGE_URL + poster_path} 
        alt="Movie"
      >
      <div class="movie-info">
        <h3>${title}</h3>
        <span class=${getColorVote(vote_average)}>${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `
    main.appendChild(movieEl)
  });
}

getColorVote = (vote) => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >=5) {
    return 'yellow'
  } else {
    return 'red'
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchValue = search.value;
  if (searchValue && searchValue !== '') {
    getMovies(SEARCH_URL + search.value)
  } else {
    window.location.reload();
  }
})




