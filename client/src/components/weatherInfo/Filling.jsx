import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { Tooltip, Grid } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import minutelyTooltip from './tooltips/minutelyTooltip';
import largeRangeTooltip from './tooltips/largeRangeTooltip';
import cn from 'classnames';


const styles = {
  filling: {
    position: 'relative',
    backgroundColor: purple[600],
    display: 'inline-block',
    minWidth: '40px',
    height: '100%',
    marginRight: '1px',
    cursor: 'pointer'
  },

  largeFilling: {
    minWidth: '14.28571%',
  },

  minute: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '1.1rem'
  },

  tooltip: {
    width: 300,
    height: 400,
    lineHeight: '1.6rem',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #dadde9',
    fontSize: '1.2rem',
    borderRadius: 10
  }

};


class Filling extends Component {
  state = { showTooltip: false };

  handleClick = () => {
    this.setState({ showTooltip: true })
  };

  handleClose = () => {
    this.setState({ showTooltip: false })
  };

  renderProperTooltip = (range) => {
    if (range === 'minutely') {
      return minutelyTooltip;
    }

    return largeRangeTooltip;
  };

  render() {
    const { classes, index, data, summary, range } = this.props;
    const { showTooltip } = this.state;

    const tooltip = this.renderProperTooltip(range);
    const isRangeLarge = range === 'daily';

    return (
      <ClickAwayListener onClickAway={this.handleClose}>
        <Tooltip
          title={tooltip(classes, data, summary)}
          placement="top"
          open={showTooltip}
          onClose={this.handleClose}
        >
          <div
            className={cn(classes.filling, { [classes.largeFilling]: isRangeLarge })}
            onClick={this.handleClick}
          >
            <span className={classes.minute}>{index}</span>
          </div>
        </Tooltip>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(Filling);

