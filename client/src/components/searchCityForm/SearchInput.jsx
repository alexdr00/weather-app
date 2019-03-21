import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const SearchInput = ({ classes, value, onChange }) => (
  <TextField
    className={classes.root}
    placeholder="Type a city!"
    value={value}
    onChange={onChange}
  />
);

export default withStyles(styles)(SearchInput);

