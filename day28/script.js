const API_GET_USER = 'https://api.github.com/users/';

const form = document.querySelector('#form');
const inputSearch = document.querySelector('#search')

async function getUser (userName) {
  try {
    const { data } = await axios(API_GET_USER + userName);
    console.log(data)
  } catch (e) {
    console.log('e')
  }
 
}

form.addEventListener('submit', (e) => {
  console.log('hello', inputSearch.value)

  e.preventDefault();
  if (inputSearch.value.trim() !== '') {
    getUser(inputSearch.value);
    inputSearch.value = '';
  }
})