import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';

const app = require('../../../package.json');

const useStyles = makeStyles(function (theme) {
  return {
    footer: {
      position: 'absolute',
      bottom: `${theme.spacing(0)}px`,
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      color: theme.palette.common.white,
      height: `${theme.spacing(3)}px`,
      lineHeight: `${theme.spacing(3)}px`,
      fontWeight: theme.typography.fontWeightRegular
    },
    version: {
      float: 'right',
      marginRight: theme.spacing(2)
    }
  };
});

/**
 * The footer
 * @returns {object} The footer
 */
export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <span className={classes.version}>Prospero {app.version}</span>
    </footer>
  );
}