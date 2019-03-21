const axios = require('axios');

const getCityWeatherData = (longitude, latitude) => {
  const darkSkyBaseUrl = 'https://api.darksky.net/forecast';
  const darkSkyToken = process.env.DARK_SKY_TOKEN;
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
