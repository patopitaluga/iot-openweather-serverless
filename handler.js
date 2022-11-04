"use strict";

module.exports.hello = async (event) => {
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
