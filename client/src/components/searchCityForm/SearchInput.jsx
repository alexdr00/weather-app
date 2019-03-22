import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },

  input: {
    color: 'red'
  }
};

const SearchInput = ({ classes, value, onChange }) => (
  <TextField
    className={classes.root}
    value={value}
    defaultValue="color"
    label="City"
    onChange={onChange}
    variant="outlined"
  />
);

export default withStyles(styles)(SearchInput);

