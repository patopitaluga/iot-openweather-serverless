if (!process.env.LAT) throw new Error('Missing LAT env variable.');
if (!process.env.LON) throw new Error('Missing LON env variable.');
if (!process.env.APIKEY) throw new Error('Missing APIKEY env variable.');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LAT}&lon=${process.env.LON}&appid=${process.env.APIKEY}&units=metric`;

(async() => {
  const a = await fetch(url);

  console.log(a.status);
  console.log(await a.json());
})();


