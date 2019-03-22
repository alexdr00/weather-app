import React from 'react';
import Grid from '@material-ui/core/Grid';
import CurrentWeather from './weatherInfo/CurrentWeather';
import { withStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import SectionHeading from './weatherInfo/SectionHeading';
import WeatherInfoBar from './weatherInfo/WeatherInfoBar';
import Map from './Map';

const styles = {
  root: {
    width: '80%',
    '@media (max-width: 712px)': {
      width: '100%'
    }
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
  },

  warning: {
    fontSize: '1rem',
    fontWeight: 500,
  }
};

const renderMinutely = (classes, minutely) => {
  if (minutely) {
    return (
      <Grid className={classes.grid} style={{ overflowY: 'auto' }}>
        <SectionHeading>
          <br/>
          Weather in the next hour (per minute)
          <span className={classes.warning}>Click on any day/hour/minute to se more details</span>
        </SectionHeading>

        <WeatherInfoBar weatherData={minutely} range="minutely"/>
      </Grid>
    );
  }
};

const InfoSection = ({ classes, weatherData }) => {
  const { currently, minutely, hourly, daily, latitude, longitude } = weatherData;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid}>
        <SectionHeading>Current Weather</SectionHeading>

        <CurrentWeather currentWeatherData={currently}/>
      </Grid>

      {renderMinutely(classes, minutely)}

      <Grid className={classes.grid} style={{ overflowY: 'auto' }}>
        <SectionHeading>
          Weather during the next 2 days (per hour)
          <br/>
          <span className={classes.warning}>Click on any day/hour/minute to se more details</span>
        </SectionHeading>

        <WeatherInfoBar weatherData={hourly}/>
      </Grid>

      <Grid className={classes.grid} style={{ overflowY: 'auto' }}>
        <SectionHeading>
          Weather during the week (per day)
          <br/>
          <span className={classes.warning}>Click on any day/hour/minute to se more details</span>
        </SectionHeading>

        <WeatherInfoBar weatherData={daily} range="daily"/>
      </Grid>

      <Grid
        className={classes.grid}
        direction="column"
        container
        justify="center"
        alignItems="center"
        style={{ overflow: 'auto' }}
      >
        <SectionHeading>
          Map where the city is located
        </SectionHeading>

        <Map latitude={latitude} longitude={longitude}/>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(InfoSection);

