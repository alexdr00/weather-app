import React from 'react';
import Grid from '@material-ui/core/Grid';
import CurrentWeather from './weatherInfo/CurrentWeather';
import { withStyles, Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const styles = {
  root: {
    width: '80%',
  },

  grid: {
    marginTop: 50,
    backgroundColor: blueGrey[50],
    width: '100%',
    padding: 20,
    borderRadius: 5
  },

  heading: {
    textAlign: 'center',
    fontSize: '1.5rem'

  }
};

const InfoSection = ({ classes }) => (
  <div className={classes.root}>
    <Grid className={classes.grid}>
      <Typography component="h3" variant="overline" gutterBottom className={classes.heading}>
        Current Weather
      </Typography>

      <CurrentWeather/>
    </Grid>
  </div>
);

export default withStyles(styles)(InfoSection);

