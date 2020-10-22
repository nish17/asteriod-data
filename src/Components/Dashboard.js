import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress } from '@material-ui/core';

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
  const [APIData, setAPIData] = useState([]);
  const [isSearchResult, setIsSearchResult] = useState(false);
  const [asteroidData, setAsteroidData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isSearchResult) return;
    async function getData() {
      setIsLoading(true);
      const response = await getTodaysData();
      const dateKey = Object.keys(response.near_earth_objects)[0];
      setIsSearchResult(false);
      setAPIData(response.near_earth_objects[dateKey]);
      setIsLoading(false);
    }
    getData();
  }, [isSearchResult]);

  useEffect(() => {
    if (!searchTerm) return;
    async function getSpecificAsteroid() {
      setIsSearchResult(true);
      setIsLoading(true);
      const response = await getAsteroidByID(searchTerm);
      setAsteroidData(response);
      setIsLoading(false);
    }
    getSpecificAsteroid();
  }, [searchTerm]);

  return (
    <div className={classes['dashboard-pos']}>
      <Searchbar submitSearch={setSearchTerm} />
      <Grid container>
        {!isLoading &&
          !isSearchResult &&
          APIData.map((data, i) => (
            <Grid key={i} item xs={4}>
              <AstroCard data={data} />
            </Grid>
          ))}
        {isLoading && (
          <div className='spinner'>
            <CircularProgress />
          </div>
        )}
        {isSearchResult && !isLoading && (
          <Grid item>
            <div>SelectedID: {searchTerm}</div>
            <AstroCard key='123' data={asteroidData} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
