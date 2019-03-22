import React from 'react';
import { Grid } from '@material-ui/core';
import MainIcon from './MainIcon';
import Detail from './Detail';
import { blueGrey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core';

import { AcUnit, FilterVintage, Star } from '@material-ui/icons';
import fahrenheitToCelsius from '../lib/fahrenheitToCelsius';


const styles = {
  mainDetails: {
    borderRight: `2px solid ${blueGrey[300]}`,
    '@media (max-width: 959px)': {
      marginBottom: 30,
      borderRight: 0,
    }
  },

  mainIcon: {
    margin: 'auto',
    marginBottom: 15,
    width: '30%',
  },
};


const MainDetails = ({ classes, data }) => {
  const { summary, temperature, apparentTemperature, icon } = data;
  const temperatureInCelsius = fahrenheitToCelsius(temperature);
  const feelLikeInCelsius = fahrenheitToCelsius(apparentTemperature);


  return (
    <Grid container direction="row" md={6} className={classes.mainDetails}>
      {/*Big Icon*/}
      <MainIcon icon={icon} className={classes.mainIcon}/>

      {/* Details group*/}
      <Grid container alignItems="center" direction="column">
        <Grid item direction="column" alignItems="flex-start">
          <Detail detailTitle="Summary" detailValue={summary} icon={Star}/>
          <Detail detailTitle="Temperature" detailValue={temperatureInCelsius} icon={AcUnit}/>
          <Detail detailTitle="Feels Like" detailValue={feelLikeInCelsius} icon={FilterVintage}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MainDetails);
