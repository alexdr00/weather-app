import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
};

class SearchContainer extends Component {
  state = { query: '' };

  handleSubmit = () => {
    const { onSearchSent } = this.props;

    onSearchSent(this.state.query)
  };

  handleChange = (event) => {
    const value = event.target.value;
    console.log('changed', value);

    this.setState({ query: value })
  };

  render() {
    const { classes, className } = this.props;
    const { query } = this.state;

    return (
      <div className={classNames(className, classes.root)}>
        <SearchInput value={query} onChange={this.handleChange} />
        <SearchButton onSubmit={this.handleSubmit}/>
      </div>

    );
  }
}

export default withStyles(styles)(SearchContainer);

