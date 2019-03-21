import React from 'react';
import Button from '@material-ui/core/Button'
import { LocationSearching } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors'

const styles = {
  root: {
    '&:hover': {
      backgroundColor: purple[900]
    },
    backgroundColor: purple[700]
  },

  icon: {
    color: '#fff',
  }
};

const SearchButton = ({ classes, onSubmit }) => (
  <Button onClick={onSubmit} size="small" className={classes.root}>
    <LocationSearching className={classes.icon}/>
  </Button>
);

export default withStyles(styles)(SearchButton);
