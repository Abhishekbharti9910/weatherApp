import './style.css';

const body = document.querySelector('body');

function searchBar() {
  const container = document.createElement('div');
  container.id = 'search-bar';

  const searchMe = document.createElement('input');
  searchMe.id = 'search-me';
  searchMe.setAttribute('type', 'text');

  const btn = document.createElement('div');
  btn.id = 'search-btn';
  btn.innerText = 'Search';
  container.appendChild(searchMe);
  container.appendChild(btn);
  return container;
}

function getMain(img, text) {
  const container = document.createElement('div');
  container.classList.add('weather-title');
  container.id = 'title';
  container.appendChild(img);

  const main = document.createElement('p');
  main.innerText = text;
  container.appendChild(main);
  document.querySelector('.weather').appendChild(container);
  console.log('hello');
}

function getDesp(text) {
  const container = document.createElement('div');
  container.classList.add('weather-desp');
  const desp = document.createElement('p');
  desp.innerText = text;
  container.appendChild(desp);
  document.querySelector('.weather').appendChild(container);
}

function getWindSpeed(src, text, value, unit, id) {
  const img = new Image();
  img.src = src;

  const container = document.createElement('div');
  container.classList.add('wind-speed-container');

  const childContainer = document.createElement('div');
  childContainer.classList.add('child-wind-speed-container');
  childContainer.id = id;
  childContainer.appendChild(img);

  const para = document.createElement('p');
  para.innerText = text;
  childContainer.appendChild(img);
  childContainer.appendChild(para);

  const p = document.createElement('p');
  p.id = 'wind-speed';
  p.innerText = `${value} ${unit}`;

  container.appendChild(childContainer);
  container.appendChild(p);
  document.querySelector('.weather').appendChild(container);
}

function WeatherCard() {
  const div = document.createElement('div');
  const card = `
  <div class="card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
    <div class="weather">
    </div>  
</div>`;
  div.innerHTML = card;
  return div;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addCityName(city) {
  const capitalisedCity = capitalizeFirstLetter(city);
  const h3 = document.createElement('h3');
  h3.style.textAlign = 'center';
  h3.innerText = capitalisedCity;
  document.querySelector('.weather').append(h3);
}

function screenPaint() {
  body.style.background = '#00539CFF';
  body.appendChild(searchBar());
  body.appendChild(WeatherCard());
}

export {
  screenPaint,
  getMain,
  getDesp,
  getWindSpeed,
  addCityName,
};
