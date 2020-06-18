import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

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
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      height: `${theme.spacing(6)}px`,
      lineHeight: `${theme.spacing(6)}px`
    },
    row: {
      height: `${theme.spacing(6)}px`,
      lineHeight: `${theme.spacing(6)}px`
    },
    more: {
      float: 'right'
    }
  };
};

/**
 * Lists out all the fields from the data file
 */
class FieldListing extends React.Component {
  /**
   * Renders the field setting page
   * @returns {Object} The field settings
   */
  render() {
    const {
      classes
    } = this.props;

    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid container spacing={0} className={classes.header}>
            <Grid item xs={4}>Field Name</Grid>
            <Grid item xs={8}>Mask Type</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={4}>Id</Grid>
            <Grid item xs={8}>
              Salesforce Id (Mask)
              <span className={classes.more}>...</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FieldListing);

FieldListing.propTypes = {
  classes: PropTypes.shape({
    header: PropTypes.object,
    row: PropTypes.object,
    more: PropTypes.object
  })
};