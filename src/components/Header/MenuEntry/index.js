import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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
      marginLeft: `${theme.spacing(3)}px`,
      height: `${theme.spacing(6)}px`
    },
    label: {
      marginLeft: `${theme.spacing(1)}px`,
      fontWeight: theme.typography.fontWeightBold
    }
  };
};

/**
 * Gets a menu entry
 */
class MenuEntry extends React.Component {
  /**
   * Renders the menu entry
   * @param {Object} props The properties
   * @returns {Object} The menu entry
   */
  render() {
    const {
      classes
    } = this.props;

    return (
      <Box className={classes.root} onClick={this.props.onClick}>
        <Box className={classes.wrapper}>
          {this.props.icon}
          <Typography className={classes.label}>{this.props.label}</Typography>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(MenuEntry);

MenuEntry.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.object,
    wrapper: PropTypes.object,
    label: PropTypes.object
  }),
  icon: PropTypes.object,
  label: PropTypes.string,
  onClick: PropTypes.func
};