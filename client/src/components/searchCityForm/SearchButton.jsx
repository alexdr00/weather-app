import React from 'react';
import Button from '@material-ui/core/Button'
import { Search } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors'
import cn from 'classnames';

const styles = {
  root: {
    '&:hover': {
      backgroundColor: purple[900]
    },
    backgroundColor: purple[700],
    borderRadius: '100px',
    height: '60px'
  },

  icon: {
    color: '#fff',
  }
};

const SearchButton = ({ classes, onSubmit, className }) => (
  <Button onClick={onSubmit} size="small" className={cn(classes.root, className)}>
    <Search className={classes.icon}/>
  </Button>
);

export default withStyles(styles)(SearchButton);
