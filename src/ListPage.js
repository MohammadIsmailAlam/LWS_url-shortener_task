import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const ListPage = ({ shortURLs, openLongURL }) => {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        URL Shortening List
      </Typography>
      <List>
        {shortURLs.map(({ shortURL, longURL }) => (
          <ListItem key={shortURL} button onClick={() => openLongURL(longURL)}>
            <ListItemText primary={shortURL} secondary={longURL} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListPage;
