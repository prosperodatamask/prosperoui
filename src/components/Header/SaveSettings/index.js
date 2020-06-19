import React from 'react';

import Save from '@material-ui/icons/Save';

import MenuEntry from '../MenuEntry';

/**
 * Gets the save settings entry
 */
class SaveSettings extends React.Component {
  /**
   * The constructor
   * @param {Object} props The properties
   */
  constructor(props) {
    super(props);

    this.state = {
      open: true
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
   * Renders the save settings entry
   * @returns {Object} The save settings entry
   */
  render() {
    return (
      <MenuEntry
        icon={<Save />}
        onClick={this.handleOpen}
        label="Save Mask Settings"
      />
    );
  }
}

export default SaveSettings;