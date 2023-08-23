import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [seriesTitle, setSeriesTitle] = useState('');

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    try {
      const response = await axios.get('/api/series');
      setSeries(response.data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleAddSeries = async (e) => {
    e.preventDefault();

    try {
      const seriesData = {
        title: seriesTitle
      };

      await axios.post('/api/series', seriesData);
      fetchSeries();

      setSeriesTitle('');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleRemoveSeries = async (seriesId) => {
    try {
      await axios.delete(`/api/series/${seriesId}`);
      fetchSeries();
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Manage Series</h1>
      <form onSubmit={handleAddSeries}>
        <input type="text" value={seriesTitle} onChange={e => setSeriesTitle(e.target.value)} placeholder="Series Title" required />
        <button type="submit">Add Series</button>
      </form>

      {series.map(series => (
        <div key={series.id}>
          <span>{series.title}</span>
          <button onClick={() => handleRemoveSeries(series.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SeriesPage;