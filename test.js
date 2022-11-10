import fetch from 'node-fetch';

if (!process.env.LAT) throw new Error('Missing LAT env variable.');
if (!process.env.LON) throw new Error('Missing LON env variable.');
if (!process.env.APIKEY) throw new Error('Missing APIKEY env variable.');
if (!process.env.SERVERLESS_FUNCTION_URL) throw new Error('Missing SERVERLESS_FUNCTION_URL env variable.');

(async() => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LAT}&lon=${process.env.LON}&appid=${process.env.APIKEY}&units=metric`;

  console.log('Fetching Open Weather api...');

  const openWeatherFetch = await fetch(url)
    .catch((err) => { throw err; });
  // console.log(a.status);
  const weatherJson = await openWeatherFetch.json();

  console.log('');
  console.log('Open weather api response:');
  console.log(weatherJson);
  console.log('');

  // only two states: 'rain' or 'clear' to simplify client
  // console.log(weatherJson.weather[0].main.toLowerCase().includes('rain') ? 'rain' : 'clear');

  console.log('Fetching IoT serverless function...');

  const lambdaFunctionFetch = await fetch(process.env.SERVERLESS_FUNCTION_URL)
    .catch((err) => { throw err; });
  const serverLessText = await lambdaFunctionFetch.text();

  console.log('');
  console.log('Serverless function response:');
  console.log(serverLessText);
})();


