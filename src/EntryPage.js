import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const EntryPage = ({ createShortURL }) => {
  const [longURL, setLongURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createShortURL(longURL);
    setLongURL('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter a long URL"
        variant="outlined"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px'}}>
        Generate Short URL
      </Button>
    </form>
  );
};

export default EntryPage;
