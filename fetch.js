import fetch from 'node-fetch';

if (!process.env.LAT) throw new Error('Missing LAT env variable.');
if (!process.env.LON) throw new Error('Missing LON env variable.');
if (!process.env.APIKEY) throw new Error('Missing APIKEY env variable.');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LAT}&lon=${process.env.LON}&appid=${process.env.APIKEY}&units=metric`;

(async() => {
  const a = await fetch(url)
    .catch((err) => { throw err; });
  // console.log(a.status);
  const weatherJson = await a.json();

  console.log(weatherJson);
  console.log('');

  // only two states: 'rain' or 'clear' to simplify client
  console.log(weatherJson.weather[0].main.toLowerCase().includes('rain') ? 'rain' : 'clear');
})();


