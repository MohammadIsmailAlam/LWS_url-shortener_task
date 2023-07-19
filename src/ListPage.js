import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const ListPage = ({ shortURLs, openLongURL }) => {
  return (
    <List>
        <div>
        <h2>URL Shortening List</h2>
        </div>
      {shortURLs.map(({ shortURL, longURL }) => (
        <ListItem key={shortURL} button onClick={() => openLongURL(longURL)}>
          <ListItemText primary={shortURL} secondary={longURL} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListPage;
