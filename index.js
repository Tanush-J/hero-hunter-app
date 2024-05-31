import { publicKey, privateKey } from './secrets.js'
const md5 = CryptoJS.MD5;

let data = []
let debounceTimeout;

const ts = new Date().getTime()

const resultDiv = document.getElementById('resultContainer');
const searchInp = document.getElementById('searchInp');

//functions
const renderHeroList = (heroArray) => {
  resultDiv.innerHTML = '';
  if(!heroArray || heroArray.length === 0){
    const noHeroHeading = document.createElement('h2');
    noHeroHeading.className = 'startHeading';
    noHeroHeading.textContent = 'No such hero found, please try something else'
    resultDiv.appendChild(noHeroHeading);
  } else {

    heroArray.forEach(item => {
      const heroCard = document.createElement('div');
      heroCard.classList.add('card');
      const imgWrapper = document.createElement('a');
      imgWrapper.classList.add('imgWrapper')
      imgWrapper.href = './heroInfo.html'
      imgWrapper.addEventListener('click', () => {
        sessionStorage.setItem('heroPrevPageState', JSON.stringify(data));
        sessionStorage.setItem('clickedHeroData', JSON.stringify(item));
      })
      const heroImg = document.createElement('img');
      heroImg.src = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      const heroName = document.createElement('p');
      heroName.classList.add('heroName')
      heroName.textContent = item.name.length>20? item.name.slice(0, 20)+'...': item.name;
      const favBtn = document.createElement('button');
      favBtn.classList.add('favBtn')
      favBtn.textContent = 'Add to favourite'
      favBtn.addEventListener('click', () => addToFavourite(item));
  
      imgWrapper.appendChild(heroImg)
      heroCard.appendChild(imgWrapper);
      heroCard.appendChild(heroName);
      heroCard.appendChild(favBtn);
      resultDiv.appendChild(heroCard);
    })
  }
}

const handleSearchInput = (event) => {
  const searchStr = event.target.value;

  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  // Used so that multiple consecutive api calls are not made
  // api call will be made, 700ms after user has stoped typing.
  debounceTimeout = setTimeout(async () => {
    if(searchStr.trim()!==''){
      data = await fetchHeroes(searchStr);
      // const filteredArray = data.filter(item => item.name.toLowerCase().includes(searchStr.toLowerCase()));
      renderHeroList(data)
    }
  }, 700);
}

const fetchHeroes = async (searchStr) => {
  try {
    const date = new Date().getTime();
    const hash = md5(date + privateKey + publicKey).toString();
    const api = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchStr}&apikey=${publicKey}&hash=${hash}`

    const res = await fetch(api);
    if(!res.ok)
      throw new Error('Could not fetch heroes');

    const resData = await res.json();
    return resData.data.results;
  } catch(error) {
    console.error('Hero fetch Error: '+error);
  }
}

const addToFavourite = (character) => {
  let favHeroStore = JSON.parse(localStorage.getItem('favHeroStore')) || []
  if (!favHeroStore.some(item => item.id === character.id)) {
    favHeroStore.push(character);
    localStorage.setItem('favHeroStore', JSON.stringify(favHeroStore));
    alert('Hero added to favourites!');
  } else {
    alert('Hero already in favourites!');
  }
}

//event listeners
searchInp.addEventListener('input', handleSearchInput)

document.addEventListener('DOMContentLoaded', () => {
  const savedState = JSON.parse(sessionStorage.getItem('heroPrevPageState'));
  if(!savedState){
    const startHeading = document.createElement('h2');
    startHeading.className = 'startHeading';
    startHeading.textContent = 'Enter hero name in search bar to find hero!'
    resultDiv.appendChild(startHeading);
  } else {
    data = [...savedState]
    renderHeroList(data);
    sessionStorage.removeItem('heroPrevPageState');
  }
})
