"use strict";

import fetch from 'node-fetch';

export const hello = async (event) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LAT}&lon=${process.env.LON}&appid=${process.env.APIKEY}&units=metric`;

  const a = await fetch(url)
    .catch((err) => { throw err; });
  // console.log(a.status);
  const weatherJson = await a.json();

  // only two states: 'rain' or 'clear' to simplify client
  const stringResponse = weatherJson.weather[0].main.toLowerCase().includes('rain') ? 'rain' : 'clear';

  return {
    statusCode: 200,
    body: stringResponse,
  };
};
