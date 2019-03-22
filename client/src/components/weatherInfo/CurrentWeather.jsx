import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainDetails from './MainDetails';
import SecondaryDetails from './SecondaryDetails';

const CurrentWeather = ({ currentWeatherData }) => (
  <Grid container direction="row">
    <MainDetails data={currentWeatherData}/>
    <SecondaryDetails data={currentWeatherData} />
  </Grid>
);

export default CurrentWeather;
