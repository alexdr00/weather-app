import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/es/colors';

const ApplicationBar = () => (
  <AppBar position="absolute" style={{ backgroundColor: purple[700] }}>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Weather App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default ApplicationBar;

