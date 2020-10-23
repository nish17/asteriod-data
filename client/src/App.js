import React from 'react';
import { Grid } from '@material-ui/core';

import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';

function App() {
  return (
    <div className='App'>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={12} sm={8}>
            <Dashboard />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
