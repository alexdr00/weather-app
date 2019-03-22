import React from 'react';
import { Grid } from '@material-ui/core';
import Skycons from 'react-skycons';

const MainIcon = ({ icon, className }) => {
  const iconString = icon.toUpperCase().replace(/-/g, '_');

  return (
    <Grid item className={className}>
      <Skycons icon={iconString} color="dark"/>
    </Grid>
  );
};

export default MainIcon;
