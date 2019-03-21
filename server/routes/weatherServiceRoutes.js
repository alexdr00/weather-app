const getCityGeoLocation = require('../lib/getCityGeoLocation');
const getCityWeatherData = require('../lib/getCityWeatherData');

module.exports = app => {
  app.post('/api/location_weather', async (req, res) => {
    const { city } = req.body;

    const geoLocation = await getCityGeoLocation(city);

    const longitude = geoLocation['longitude'];
    const latitude = geoLocation['latitude'];

    const weatherData = await getCityWeatherData(longitude, latitude);

    res.json(weatherData);
  });
};
