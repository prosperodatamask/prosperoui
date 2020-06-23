import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import {
  compose
} from 'redux';

import {
  connect
} from 'react-redux';

import {
  setHeaders
} from '../../actions';

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
 * Gets the partial state we need
 * @param {Object} state The state
 * @returns {Object} The reduced state
 */
function mapStateToProps(state) {
  return {
    headers: state.headers
  };
}

/**
 * Dispatches the headers
 * @param {Function} dispatch The dispatch function
 * @param {Object[]} headers The headers
 * @returns {undefined}
 */
function dispatchHeaders(dispatch, headers) {
  dispatch(setHeaders([ ...headers ]));
}

/**
 * Maps the dispatch to props
 * @param {Function} dispatch The dispatch function
 * @returns {Object} The props to update
 */
function mapDispatchToProps(dispatch) {
  const dispatch_headers = dispatchHeaders.bind(undefined, dispatch);

  return {
    setHeaders: dispatch_headers
  };
}

/**
 * Lists out all the fields from the data file
 */
class FieldListing extends React.Component {
  /**
   * Handle messages when data is loaded
   * @returns {undefined}
   */
  componentDidMount() {
    window.api.response(window.api.types.HEADERS_LOADED, this.props.setHeaders);
  }

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
        {this.props.headers.map(function (header, index) {
          return <Grid item xs={12} key={index}>
            <Grid container spacing={0}>
              <Grid item xs={4}>{header.label}</Grid>
              <Grid item xs={8}>
                {header.transform.label}
                <span className={classes.more}>...</span>
              </Grid>
            </Grid>
          </Grid>;
        })}
      </Grid>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FieldListing);

FieldListing.propTypes = {
  headers: PropTypes.array,
  setHeaders: PropTypes.func,
  classes: PropTypes.shape({
    header: PropTypes.string,
    row: PropTypes.string,
    more: PropTypes.string
  })
};