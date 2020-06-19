import React from 'react';

import GetApp from '@material-ui/icons/GetApp';

import MenuEntry from '../MenuEntry';

/**
 * Gets the save data button
 */
class SaveData extends React.Component {
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
   * Renders the save data entry
   * @returns {Object} The save data entry
   */
  render() {
    return (
      <MenuEntry
        icon={<GetApp />}
        onClick={this.handleOpen}
        label="Save Masked Data"
      />
    );
  }
}

export default SaveData;