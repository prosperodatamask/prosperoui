import React from 'react';

import {
  makeStyles
} from '@material-ui/core/styles';

import LoadFile from './LoadFile';
import LoadSettings from './LoadSettings';
import SaveData from './SaveData';
import SaveSettings from './SaveSettings';

const useStyles = makeStyles(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      height: `${theme.spacing(6)}px`,
      lineHeight: `${theme.spacing(6)}px`,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold
    }
  };
});

/**
 * Gets the app header
 * @return {Object} The app header
 */
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LoadFile />
      <LoadSettings />
      <SaveData />
      <SaveSettings />
    </div>
  );
}

export default Header;