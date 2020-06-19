import React from 'react';

import Settings from '@material-ui/icons/Settings';

import MenuEntry from '../MenuEntry';

/**
 * The load setting entry
 */
class LoadSettings extends React.Component {
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
   * Renders the load file entry
   * @returns {Object} The load file entry
   */
  render() {
    return (
      <MenuEntry
        icon={<Settings />}
        onClick={this.handleClick}
        label="Load Mask Settings"
      />
    );
  }
}

export default LoadSettings;