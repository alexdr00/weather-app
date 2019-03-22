import React from 'react';
import Grid from '@material-ui/core/Grid';
import CurrentWeather from './weatherInfo/CurrentWeather';
import { withStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import SectionHeading from './weatherInfo/SectionHeading';
import WeatherInfoBar from './weatherInfo/WeatherInfoBar';

const styles = {
  root: {
    width: '80%',
  },

  grid: {
    marginTop: 50,
    backgroundColor: blueGrey[50],
    width: '100%',
    padding: 20,
    borderRadius: 5,
  },

  heading: {
    textAlign: 'center',
    fontSize: '1.5rem'
  }
};

const renderMinutely = (classes, minutely) => {
  if (minutely) {
    return (
      <Grid className={classes.grid} style={{ overflowY: 'auto' }}>
        <SectionHeading>Weather in the next hour (per minute)</SectionHeading>

        <WeatherInfoBar weatherData={minutely} range="minutely"/>
      </Grid>
    );
  }
};

const InfoSection = ({ classes, weatherData }) => {
  const { currently, minutely, hourly, daily } = weatherData;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid}>
        <SectionHeading>Current Weather</SectionHeading>

        <CurrentWeather currentWeatherData={currently}/>
      </Grid>

      {renderMinutely(classes, minutely)}

      <Grid className={classes.grid} style={{ overflowY: 'auto' }}>
        <SectionHeading>Weather during the next 2 days (per hour)</SectionHeading>

        <WeatherInfoBar weatherData={hourly} />
      </Grid>

      <Grid className={classes.grid} style={{ overflowY: 'auto' }}>
        <SectionHeading>Weather during the week (per day)</SectionHeading>

        <WeatherInfoBar weatherData={daily} range="daily" />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(InfoSection);

