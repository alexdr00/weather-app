import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { Tooltip, Grid } from '@material-ui/core';
import Detail from './Detail';
import { BeachAccess, FlashOn } from '@material-ui/icons';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


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
    height: 200,
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #dadde9',
    fontSize: '1.2rem',
    borderRadius: 10
  }

};


class Filling extends Component {
  state = { showTooltip: false };

  insideTooltip = (classes) => {
    return (
      <Grid container alignItems="center" justify="center" className={classes.tooltip}>
        <Grid item>
          <Detail
            detailTitle="Precipitation Probability"
            detailValue="value"
            icon={BeachAccess}
          />

          <Detail
            detailTitle="Precipitation Intensity"
            detailValue="value"
            icon={FlashOn}
          />
        </Grid>
      </Grid>
    );
  };

  handleClick = () => {
    this.setState({ showTooltip: true })
  };

  handleClose = () => {
    this.setState({ showTooltip: false })
  };

  render() {
    const { classes, minute } = this.props;
    const { showTooltip } = this.state;

    return (
      <ClickAwayListener onClickAway={this.handleClose}>
        <Tooltip
          title={this.insideTooltip(classes)}
          placement="top"
          open={showTooltip}
          onClose={this.handleClose}
        >
          <div className={classes.filling} onClick={this.handleClick}>
            <span className={classes.minute}>{minute}</span>
          </div>
        </Tooltip>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(Filling);

