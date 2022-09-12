const key = 'a206f56ec032351ad2acb0b9b7663c48';

// Gets city name from form
function cleanWhitespace(cityName) {
  // if not an empty string
  if (cityName) {
    // remove whitespace for the api call

    return cityName
      .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
      .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
      .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
  }
  return '';
}

// get image obj
function getImage(weatherObj) {
  const img = new Image();
  img.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}.png`;
  return img;
}

// get weather obj
function getTemp(weatherObj) {
  const temp = {
    temp: weatherObj.main.temp,
    feelsLike: weatherObj.main.feels_like,
  };
  return temp;
}

// get visibility
function getVisibility(weatherObj) {
  return weatherObj.visibility;
}
// get weather description
function getWeather(weatherObj) {
  const weather = {
    main: weatherObj.weather[0].main,
    desp: weatherObj.weather[0].description,
  };

  return weather;
}
// get wind speed
function getWindSpeed(weatherObj) {
  return weatherObj.wind.speed;
}

// to hit api and get all the data and then return.
export default async function hitApi(place) {
  place = cleanWhitespace(place);
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${key}`);
  const weatherObj = await response.json();
  const data = {
    img: getImage(weatherObj),
    weather: getWeather(weatherObj),
    visibility: getVisibility(weatherObj),
    windSpeed: getWindSpeed(weatherObj),
    temp: getTemp(weatherObj),

  };
  return data;
}
