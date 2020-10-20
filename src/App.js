import React, { useState, useEffect } from 'react';
import './App.css';

import { getTodaysData } from './api';
import AstroCard from './Components/AstroCard';
function App() {
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
    <div className='App'>
      Asteriod Data
      {APIData.length > 0 &&
        APIData.map((data, i) => 
        <AstroCard data={data} />
        // <div key={i}>{data['name']}</div>
        )}
    </div>
  );
}

export default App;
