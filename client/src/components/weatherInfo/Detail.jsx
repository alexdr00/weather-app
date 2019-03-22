import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';


const styles = {
  detailText: {
    fontSize: '1.2rem',
    fontWeight: 500,
  },

  detailTitle: {
    marginRight: 10,
    color: purple[600],
  },

  detailGrid: {
    display: 'flex',
    marginBottom: 10
  },

  detailIcon: {
    marginRight: 10,
    color: purple[600],
  }
};

const Detail = ({ classes, detailTitle, detailValue, icon }) => {
  const DetailIcon = icon;

  return (
    <Grid item className={classes.detailGrid}>
      <DetailIcon className={classes.detailIcon}/>

      <div className={classes.detailText}>
        <span className={classes.detailTitle}>{detailTitle}</span>
        <span>{detailValue}</span>
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Detail);

