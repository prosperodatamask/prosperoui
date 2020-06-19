import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Publish from '@material-ui/icons/Publish';

import MenuEntry from '../MenuEntry';

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

    this.handleOpen = this.handleOpenState.bind(this, true);
    this.handleClose = this.handleOpenState.bind(this, false);
  }

  /**
   * Handles the open state
   * @param {Boolean} isOpen If the dialog is open
   * @returns {undefined}
   */
  handleOpenState(isOpen) {
    this.setState({
      open: isOpen
    });
  }

  /**
   * Renders the load file entry
   * @returns {Object} The load file entry
   */
  render() {
    return (
      <span>
        <MenuEntry
          icon={<Publish />}
          onClick={this.handleOpen}
          label="Load Data File"
        />
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
      </span>
    );
  }
}

export default LoadFile;