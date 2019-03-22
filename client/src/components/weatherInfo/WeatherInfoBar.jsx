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

const renderFillings = () => {
  return [...Array(60).keys()].map(minute => {
    return (
      <Filling minute={minute + 1}/>
    )}
  );
};

const WeatherInfoBar = ({ classes }) => {
  return (
      <div className={classes.bar} >
        {renderFillings()}
      </div>
  );
};

export default withStyles(styles)(WeatherInfoBar);
