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

const SecondaryDetails = () => (
  <Grid container alignItems="center" justify="flex-end" direction="column" md={6}>
    <Grid item direction="column" alignItems="flex-start">
      <Detail detailTitle="Precipitation Probability" detailValue="3.0" icon={BeachAccess}/>
      <Detail detailTitle="Humidity" detailValue="0.4" icon={Opacity}/>
      <Detail detailTitle="Wind Speed" detailValue="0.2" icon={Waves}/>
      <Detail detailTitle="Cloud Cover" detailValue="3" icon={WbCloudy}/>
      <Detail detailTitle="Visibility" detailValue="6" icon={Visibility}/>
    </Grid>
  </Grid>
);

export default SecondaryDetails;

