import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    flex: 1,
  },
}));
export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.appBar}>Asteroid Data</Typography>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
}
