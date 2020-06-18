import React from 'react';
import PropTypes from 'prop-types';

import Save from '@material-ui/icons/Save';

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
      marginLeft: `${theme.spacing(1)}px`
    }
  };
};

/**
 * Gets the save settings entry
 */
class SaveSettings extends React.Component {
  /**
   * The props
   * @param {Object} props The properties
   */
  constructor(props) {
    super(props);

    this.state = {
      toggled: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handles the click
   * @returns {undefined}
   */
  handleClick() {
    this.setState(state => ({
      toggled: !state.toggled
    }));
  }

  /**
   * Renders the save settings entry
   * @returns {Object} The save settings entry
   */
  render() {
    const {
      classes
    } = this.props;

    return (
      <div className={classes.root} onClick={this.handleClick}>
        <div className={classes.wrapper}>
          <Save />
          <span className={classes.label}>
              Save Mask Settings
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SaveSettings);

SaveSettings.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.object,
    wrapper: PropTypes.object,
    label: PropTypes.object
  })
};