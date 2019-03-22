import React from 'react';
import Detail from './Detail';
import { Grid } from '@material-ui/core';

import {
  BeachAccess,
  Opacity,
  Waves,
  WbCloudy,
  Visibility
} from '@material-ui/icons';

const SecondaryDetails = ({ data }) => {
  const {
    humidity,
    windSpeed,
    precipIntensity,
    precipProbability,
    cloudCover,
  } = data;

  return (
    <Grid container alignItems="center" justify="flex-end" direction="column" md={6}>
      <Grid item direction="column" alignItems="flex-start">
        <Detail detailTitle="Precipitation Probability" detailValue={precipProbability} icon={BeachAccess}/>
        <Detail detailTitle="Humidity" detailValue={humidity} icon={Opacity}/>
        <Detail detailTitle="Wind Speed" detailValue={windSpeed} icon={Waves}/>
        <Detail detailTitle="Cloud Cover" detailValue={cloudCover} icon={WbCloudy}/>
        <Detail detailTitle="Visibility" detailValue={precipIntensity} icon={Visibility}/>
      </Grid>
    </Grid>
  );
};

export default SecondaryDetails;

