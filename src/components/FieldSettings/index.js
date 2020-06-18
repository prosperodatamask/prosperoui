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
    header: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      height: `${theme.spacing(6)}px`,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: `${theme.spacing(6)}px`,
      paddingLeft: `${theme.spacing(2)}px`
    }
  };
};

/**
 * Gets the field settings
 */
class FieldSettings extends React.Component {
  /**
   * Renders the field setting page
   * @returns {Object} The field settings
   */
  render() {
    const {
      classes
    } = this.props;

    return (
      <Box borderLeft={1}>
        <Typography className={classes.header}>Field Settings</Typography>
        <Typography>Field Settings</Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(FieldSettings);

FieldSettings.propTypes = {
  classes: PropTypes.shape({
    header: PropTypes.object
  })
};