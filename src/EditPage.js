import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";

const EditPage = ({ shortURLs, editURL, deleteURL }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedShortURL, setSelectedShortURL] = useState('');
  const [editedLongURL, setEditedLongURL] = useState('');

  const handleEditClick = (shortURL, longURL) => {
    setSelectedShortURL(shortURL);
    setEditedLongURL(longURL);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setEditedLongURL('');
    setSelectedShortURL('');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editURL(selectedShortURL, editedLongURL);
    setEditDialogOpen(false);
    setEditedLongURL('');
    setSelectedShortURL('');
  };

  return (
    <>
      <List>
        {shortURLs.map(({ shortURL, longURL }) => (
          <ListItem key={shortURL}>
            <ListItemText primary={shortURL} secondary={longURL} />
            <Button onClick={() => handleEditClick(shortURL, longURL)} color="primary">
              Edit
            </Button>
            <Button onClick={() => deleteURL(shortURL)} color="secondary">
              Delete
            </Button>
          </ListItem>
        ))}
      </List>

      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <form onSubmit={handleEditSubmit}>
          <DialogTitle>Edit Long URL</DialogTitle>
          <DialogContent>
            <TextField
              label="Long URL"
              variant="outlined"
              value={editedLongURL}
              onChange={(e) => setEditedLongURL(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditDialogClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default EditPage;