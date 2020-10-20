import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { getTodaysData, getAsteroidByID } from '../api';
import AstroCard from './AstroCard';
import Searchbar from './SearchBar';

const useStyles = makeStyles(() => ({
  'dashboard-pos': {
    flex: 1,
    position: 'absolute',
    top: '5em',
    left: '20px',
  },
}));
export default function Dashboard(props) {
  const classes = useStyles();
  const [APIData, setAPIData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await getTodaysData();
      const dateKey = Object.keys(response.near_earth_objects)[0];
      setAPIData(response.near_earth_objects[dateKey]);
      setIsLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    async function getSpecificAsteroid() {
      setIsLoading(true);
      const response = await getAsteroidByID(searchTerm);
      setAPIData(response);
      setIsLoading(false);
    }
    getSpecificAsteroid();
  }, [searchTerm]);

  return (
    <div className={classes['dashboard-pos']}>
      <Searchbar submitSearch={setSearchTerm} />
      <Grid container>
        {!isLoading &&
          APIData.map((data, i) => (
            <Grid item xs={4}>
              <AstroCard key={i} data={data} />
            </Grid>
          ))}
        {isLoading && <div>Loading... Please wait</div>}
      </Grid>
    </div>
  );
}
