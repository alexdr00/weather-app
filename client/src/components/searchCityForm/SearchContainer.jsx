import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },

  button: {
    marginLeft: 20,
  }
};

class SearchContainer extends Component {
  state = { query: '' };

  handleSubmit = () => {
    const { onSearchSent } = this.props;

    onSearchSent(this.state.query)
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({ query: value })
  };

  render() {
    const { classes, className } = this.props;
    const { query } = this.state;

    return (
      <div className={cn(className, classes.root)}>
        <SearchInput value={query} onChange={this.handleChange} />
        <SearchButton onSubmit={this.handleSubmit} className={classes.button} />
      </div>

    );
  }
}

export default withStyles(styles)(SearchContainer);

