import fetch from 'node-fetch';

(async() => {
  const a = await fetch('')
    .catch((err) => { throw err; });
  const weatherJson = await a.text();

  console.log(weatherJson);
})();


