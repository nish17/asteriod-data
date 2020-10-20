import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { getTodaysData } from '../api';
import AstroCard from './AstroCard';

const useStyles = makeStyles(() => ({
  'dashboard-pos': {
    flex: 1,
    position: 'absolute',
    top: '5em',
  },
}));
export default function Dashboard(props) {
  const classes = useStyles();
  const [APIData, setAPIData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await getTodaysData();
      const dateKey = Object.keys(response.near_earth_objects)[0];
      setAPIData(response.near_earth_objects[dateKey]);
    }
    getData();
  }, []);

  return (
    <div className={classes['dashboard-pos']}>
      {APIData.length > 0 &&
        APIData.map((data, i) => <AstroCard key={i} data={data} />)}
    </div>
  );
}
