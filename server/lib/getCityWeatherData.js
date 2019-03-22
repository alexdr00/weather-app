const axios = require('axios');

const getCityWeatherData = (longitude, latitude) => {
  const darkSkyBaseUrl = 'https://api.darksky.net/forecast';
  const darkSkyToken = '88030114c5e47763a011a75e7a10c633';
  const darkSkyFullUrl = `${darkSkyBaseUrl}/${darkSkyToken}/${latitude},${longitude}`;

  return new Promise((resolve, reject) => {
    axios.get(darkSkyFullUrl)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(error => reject(error));
  });
};

module.exports = getCityWeatherData;
