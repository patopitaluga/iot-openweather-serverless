import fetch from 'node-fetch';

if (!process.env.LAT) throw new Error('Missing LAT env variable.');
if (!process.env.LON) throw new Error('Missing LON env variable.');
if (!process.env.OPENWEATHER_ID) throw new Error('Missing OPENWEATHER_APIKEY env variable.');
if (!process.env.OPENWEATHER_APIKEY) throw new Error('Missing OPENWEATHER_APIKEY env variable.');
if (!process.env.SERVERLESS_FUNCTION_URL) throw new Error('Missing SERVERLESS_FUNCTION_URL env variable.');

(async() => {
  // Current weather
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LAT}&lon=${process.env.LON}&appid=${process.env.OPENWEATHER_APIKEY}&units=metric`;
  // Hourly forecast
  const url = `https://api.openweathermap.org/data/2.5/forecast?cnt=3&lat=${process.env.LAT}&lon=${process.env.LON}&id=${process.env.OPENWEATHER_ID}&appid=${process.env.OPENWEATHER_APIKEY}&units=metric`;

  console.log('Fetching Open Weather api...');

  const openWeatherFetch = await fetch(url)
    .catch((err) => { throw err; });
  // console.log(a.status);
  const weatherJson = await openWeatherFetch.json();

  console.log('');
  console.log('Open weather api response:');
  console.log(JSON.stringify(weatherJson, null, 2));
  console.log('');

  const forecasts = [];
  weatherJson.list.forEach((_eachForecast) => {
    forecasts.push(_eachForecast.weather[0].main.toLowerCase());
  });
  console.log('Main forecasts', forecasts);

  // only two states: 'rain' or 'clear' to simplify client
  console.log('');
  console.log('Our serverless function should reply:');
  console.log(
    (forecasts.includes('rain') ||
    forecasts.includes('thunderstorm') ||
    forecasts.includes('storm') ||
    forecasts.includes('drizzle'))
     ? 'rain' : 'clear'
  );

  console.log('Fetching IoT serverless function...');

  const lambdaFunctionFetch = await fetch(process.env.SERVERLESS_FUNCTION_URL)
    .catch((err) => { throw err; });
  const serverLessText = await lambdaFunctionFetch.text();

  console.log('');
  console.log('Serverless function response:');
  console.log(serverLessText);
})();


