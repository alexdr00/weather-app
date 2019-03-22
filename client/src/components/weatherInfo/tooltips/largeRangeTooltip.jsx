import React from 'react';
import { Grid } from '@material-ui/core';
import Detail from '../Detail';
import { AcUnit, BeachAccess, FlashOn, Star, WbCloudy } from '@material-ui/icons';


export default (classes, data, summary) => {
  return (
    <Grid container alignItems="center" justify="center" className={classes.tooltip}>
      <Grid item>
        <Detail
          detailTitle="Summary"
          detailValue={summary}
          icon={Star}
        />

        <Detail
          detailTitle="Temperature"
          detailValue={data.temperature}
          icon={AcUnit}
        />

        <Detail
          detailTitle="Cloud Cover"
          detailValue={data.cloudCover}
          icon={WbCloudy}
        />

        <Detail
          detailTitle="Precipitation Probability"
          detailValue={data.precipProbability}
          icon={BeachAccess}
        />

        <Detail
          detailTitle="Precipitation Intensity"
          detailValue={data.precipIntensity}
          icon={FlashOn}
        />
      </Grid>
    </Grid>
  );
};
