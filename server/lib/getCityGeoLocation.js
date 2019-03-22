const axios = require('axios');


const getCityGeoLocation = (city) => {
  const mapboxBaseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
  const mapboxToken = 'pk.eyJ1IjoiamdhdmlyMjMiLCJhIjoiY2pwMzMwanYwMDJkeTNwcDduODR5bXRlayJ9.p_HLVm6sK-X0d5-JIpSdxA';

  const mapboxFullUrl = `${mapboxBaseUrl}/${city}.json?access_token=${mapboxToken}`;

  return new Promise((resolve, reject) => {
    axios.get(mapboxFullUrl)
      .then(({ data }) => {
        const cityData = data.features[0];
        const longitude = cityData.center[0];
        const latitude = cityData.center[1];

        resolve({ longitude, latitude });
      })
      .catch(error => reject(error));
  });
};

module.exports = getCityGeoLocation;
