const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', () => getJDadJoke());

getJDadJoke = async () => {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  joke.innerText = data.joke;
}