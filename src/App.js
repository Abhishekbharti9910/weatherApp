import apiGiveMeData from './api methods';

// image import
import windSpdPng from './img/windSpeed.png';
import temp from './img/temp2.png';
import vis from './img/vis.svg';

import {
  screenPaint, getMain, getDesp, getWindSpeed, addCityName,
} from './dom';

// dom work
screenPaint();

// api helper function
async function allAsyncShit(place) {
  try {
    const data = await apiGiveMeData(place.value);
    document.querySelector('.weather').innerHTML = '';
    addCityName(place.value);
    getMain(data.img, data.weather.main);
    getDesp(data.weather.desp);
    getWindSpeed(windSpdPng, 'Wind Speed', data.windSpeed, 'Km/Hr', 'speed');
    getWindSpeed(temp, 'Temperatur', data.temp.temp, 'Farenheight', 'temp');
    getWindSpeed(vis, 'Visibility', data.visibility, 'Km', 'visi');
    console.log(data);
  } catch (e) {
    alert('Please enter proper location');
    // console.log('got an error', e);
  }
}

const searchBtn = document.getElementById('search-btn');
const searchMe = document.getElementById('search-me');

searchBtn.addEventListener('click', () => {
  const textBar = document.getElementById('search-me');
  allAsyncShit(textBar);
});

searchMe.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const textBar = document.getElementById('search-me');
    allAsyncShit(textBar);
  }
});
