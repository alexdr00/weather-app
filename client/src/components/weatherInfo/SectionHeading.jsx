import React from 'react';
import { Typography, withStyles } from '@material-ui/core';


const styles = {
  heading: {
    textAlign: 'center',
    fontSize: '1.5rem'
  }
};

const SectionHeading = ({ children, classes }) => (
  <Typography component="h3" variant="overline" gutterBottom className={classes.heading}>
    {children}
  </Typography>
);

export default withStyles(styles)(SectionHeading);
