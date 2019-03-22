import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainDetails from './MainDetails';
import SecondaryDetails from './SecondaryDetails';

const CurrentWeather = () => (
  <Grid container direction="row" xs={12}>
    <MainDetails />
    <SecondaryDetails />
  </Grid>
);

export default CurrentWeather;
