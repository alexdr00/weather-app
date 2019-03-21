import React from 'react';
import Grid from '@material-ui/core/Grid';
import WeatherInfoContainer from './weatherInfoBars/WeatherInfoContainer';

const InfoSection = () => (
  <div className="infoSection">
    <Grid item xs={12}>
      <WeatherInfoContainer/>
    </Grid>
  </div>
);

export default InfoSection;

