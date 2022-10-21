import movies from './data.js';
console.log(movies);

const baseHtml = function() {
  return /*html*/ `
    <div class="header">
      <p>MEANINGFUL MOVIES</p>
      <div>logo</div>
    </div>
    <div class=cards></div>
  `
};

const root = document.querySelector('#root');
root.insertAdjacentHTML('beforeend', baseHtml());
const card = document.querySelector('.cards')

card.innerHTML = movies.cards.map(movie => /*html*/ `
  <div class="card">
    <div class="text-container">
      <h1 class="title">${movie.title}</h1>
      <p class="sub">${movie.sub}</p>
      <p class="text">${movie.text}</p>
    </div>
    <div class="button-container">
      <button class="button">Watch</button>
    </div>
  </div>
`).join('');