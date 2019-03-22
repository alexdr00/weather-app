import React from 'react';
import { Grid } from '@material-ui/core';
import MainIcon from './MainIcon';
import Detail from './Detail';
import { blueGrey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core';

import { AcUnit, FilterVintage, Star } from '@material-ui/icons';


const styles = {
  mainDetails: {
    borderRight: `2px solid ${blueGrey[300]}`
  },

  mainIcon: {
    margin: 'auto',
    marginBottom: 15,
    width: '30%',
  },
};


const MainDetails = ({ classes }) => (
  <Grid container direction="row" md={6} className={classes.mainDetails}>
    {/*Big Icon*/}
    <MainIcon icon="partly_cloudy_day" className={classes.mainIcon}/>

    {/* Details group*/}
    <Grid container alignItems="center" direction="column">
      <Grid item direction="column" alignItems="flex-start">
        <Detail detailTitle="Summary" detailValue="Clear" icon={Star}/>
        <Detail detailTitle="Temperature" detailValue="54" icon={AcUnit}/>
        <Detail detailTitle="Feels Like" detailValue="54" icon={FilterVintage}/>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(MainDetails);
