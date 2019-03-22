import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { indigo, deepOrange, teal } from '@material-ui/core/colors';
import { Tooltip } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import minutelyTooltip from './tooltips/minutelyTooltip';
import largeRangeTooltip from './tooltips/largeRangeTooltip';
import cn from 'classnames';


const styles = {
  filling: {
    position: 'relative',
    display: 'inline-block',
    minWidth: '40px',
    height: '100%',
    cursor: 'pointer'
  },

  fillingCold: {
    backgroundColor: indigo[500],
  },

  fillingHot: {
    backgroundColor: deepOrange[500],
  },

  fillingAverage: {
    backgroundColor: teal[400],
  },

  largeFilling: {
    minWidth: '14.28571%',
  },

  timeMeasurement: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '1.1rem'
  },

  tooltip: {
    width: 300,
    height: 300,
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

  renderProperColor = (temperature, classes) => {
    if (temperature > 86) {
      return classes.fillingHot
    } else if (temperature < 59) {
      return classes.fillingCold
    } else {
      return classes.fillingAverage
    }
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

    const color = this.renderProperColor(
      data.temperature || data.temperatureLow || 20, classes
    );

    return (
      <ClickAwayListener onClickAway={this.handleClose}>
        <Tooltip
          title={tooltip(classes, data, summary)}
          placement="bottom"
          open={showTooltip}
        >
          <div
            className={cn(
              classes.filling,
              color,
              { [classes.largeFilling]: isRangeLarge },
              )
            }
            color="cold"
            onClick={this.handleClick}
          >
            <span className={classes.timeMeasurement}>{index}</span>
          </div>
        </Tooltip>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(Filling);

