"use strict";

import fetch from 'node-fetch';

export const hello = async (event) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?cnt=3&lat=${process.env.LAT}&lon=${process.env.LON}&id=${process.env.OPENWEATHER_ID}&appid=${process.env.OPENWEATHER_APIKEY}&units=metric`;

  const a = await fetch(url)
    .catch((err) => { throw err; });
  // console.log(a.status);
  const weatherJson = await a.json();
  const forecasts = [];
  weatherJson.list.forEach((_eachForecast) => {
    forecasts.push(_eachForecast.weather[0].main.toLowerCase());
  });
  console.log('Main forecasts', forecasts);

  // only two states: 'rain' or 'clear' to simplify client
  const stringResponse =
    (forecasts.includes('rain') ||
    forecasts.includes('thunderstorm') ||
    forecasts.includes('storm') ||
    forecasts.includes('drizzle'))
      ? 'rain' : 'clear';

  return {
    statusCode: 200,
    body: stringResponse,
  };
};
