import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import {
  makeStyles
} from '@material-ui/core/styles';

import {
  ThemeProvider
} from '@material-ui/styles';

import Header from '../Header';
import FieldListing from '../FieldListing';
import Preview from '../Preview';
import FieldSettings from '../FieldSettings';
import Footer from '../Footer';

import theme from '../../theme';

const useStyles = makeStyles(function () {
  return {
    root: {
      flexGrow: 1,
      minHeight: '100vh'
    },
    main: {
      minHeight: '100vh'
    }
  };
});

/**
 * The main app
 * @returns {Object} The app
 */
export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={8} className={classes.main}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FieldListing />
              </Grid>
              <Grid item xs={12}>
                <Preview />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <FieldSettings />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </ThemeProvider>
  );
}