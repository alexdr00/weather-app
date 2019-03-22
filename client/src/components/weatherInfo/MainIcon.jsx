import React from 'react';
import { Grid } from '@material-ui/core';
import Skycons from 'react-skycons';

const MainIcon = ({ icon, className }) => {
  return (
    <Grid item className={className}>
      <Skycons icon={icon.toUpperCase()} color="dark"/>
    </Grid>
  );
};

export default MainIcon;
