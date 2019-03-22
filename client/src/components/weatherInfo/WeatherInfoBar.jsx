import React from 'react';
import { withStyles } from '@material-ui/core';
import Filling from './Filling';
import { purple } from '@material-ui/core/colors';

const styles = {
  bar: {
    display: 'flex',
    minWidth: '100%',
    height: 90,
    borderRadius: 20,
    backgroundColor: purple[300],
    overflowY: 'auto'
  },
};

const renderFillings = (weatherData, range) => {
  return weatherData.data.map((timeMeasurement, index) => (
      <Filling
        data={timeMeasurement}
        summary={weatherData.summary}
        index={index + 1}
        range={range}
      />
    )
  );
};

const WeatherInfoBar = ({ classes, weatherData, range }) => {
  return (
      <div className={classes.bar} >
        {renderFillings(weatherData, range)}
      </div>
  );
};

export default withStyles(styles)(WeatherInfoBar);
