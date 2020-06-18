import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Publish from '@material-ui/icons/Publish';

import {
  withStyles
} from '@material-ui/core/styles';

/**
 * Gets the component styles
 * @param {Object} theme The theme
 * @returns {Object} The component styles
 */
const styles = function (theme) {
  return {
    root: {
      display: 'inline-block'
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: `${theme.spacing(3)}px`
    },
    label: {
      marginLeft: `${theme.spacing(1)}px`,
      fontWeight: theme.typography.fontWeightBold
    }
  };
};

/**
 * Gets the load file entry
 */
class LoadFile extends React.Component {
  /**
   * The constructor
   * @param {Object} props The properties
   */
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  /**
   * Handles the click
   * @returns {undefined}
   */
  handleClick() {
    this.setState({
      open: true
    });
  }

  /**
   * Handles close
   * @returns {undefined}
   */
  handleClose() {
    this.setState({
      open: false
    });
  }

  /**
   * Renders the load file entry
   * @returns {Object} The load file entry
   */
  render() {
    const {
      classes
    } = this.props;

    return (
      <Box className={classes.root} onClick={this.handleClick}>
        <Box className={classes.wrapper}>
          <Publish />
          <Typography className={classes.label}>Load Data File</Typography>
        </Box>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Load File</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">Cancel</Button>
            <Button onClick={this.handleClose} color="primary">Load</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }
}

export default withStyles(styles)(LoadFile);

LoadFile.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.object,
    wrapper: PropTypes.object,
    label: PropTypes.object
  })
};