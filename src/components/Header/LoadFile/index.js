import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';

import Publish from '@material-ui/icons/Publish';

import MenuEntry from '../MenuEntry';

const INPUT_TYPES = [
  '.csv',
  'text/csv'
];

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
      open: false,
      filename: 'No File Loaded...'
    };

    this.fileInputProps = {
      accept: INPUT_TYPES.join()
    };

    this.handleOpen = this.handleOpenState.bind(this, true);
    this.handleClose = this.handleOpenState.bind(this, false);
    this.handleFileChange = this.handleFileChange.bind(this);
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
   * Handles the file name change
   * @returns {undefined}
   */
  handleFileChange() {
    const file = document.getElementById('fileToLoad').files[0].path;

    this.setState({
      filename: file
    });

    window.api.request(window.api.types.FILE_OPEN, file);

    this.handleOpenState(false);
  }

  /**
   * Set up the handlers once the component is mounted
   * @returns {undefined}
   */
  componentDidMount() {
    const handleOpen = this.handleOpenState.bind(this, true);
    window.api.response(window.api.types.FILE_OPEN_REQUESTED, handleOpen);
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
            <DialogContentText>{this.state.filename}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">Cancel</Button>
            <Button
              color="primary"
              varient="contained"
              component="label"
            >Load
              <Input
                id="fileToLoad"
                type="file"
                style={{
                  display: 'none'
                }}
                inputProps={this.fileInputProps}
                onChange={this.handleFileChange}
              />
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default LoadFile;