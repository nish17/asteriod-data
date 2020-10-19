import axios from 'axios';

export async function getTodaysData() {
  const URL = 'https://api.nasa.gov/neo/rest/v1/feed/today';
  try {
    const response = await axios.get(URL, {
      params: {
        detailed: true,
        api_key: process.env.REACT_APP_API_KEY,
      },
    });
    return response.data;
  } catch (e) {
    console.log('Error in fetching data from API.');
  }
}
