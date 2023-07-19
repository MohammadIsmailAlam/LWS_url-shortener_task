import React, { useState, useEffect } from "react";
import EntryPage from "./EntryPage";
import EditPage from "./EditPage";
import ListPage from "./ListPage";

const App = () => {
  const [shortURLs, setShortURLs] = useState([]);

  useEffect(() => {
    const storedURLs = localStorage.getItem("shortURLs");
    if (storedURLs) {
      setShortURLs(JSON.parse(storedURLs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shortURLs", JSON.stringify(shortURLs));
  }, [shortURLs]);

  const createShortURL = (longURL) => {
    const shortURL = generateShortURL();
    setShortURLs([...shortURLs, { shortURL, longURL }]);
  };

  const editURL = (shortURL, updatedLongURL) => {
    // Finding the index of the short URL in the array
    const index = shortURLs.findIndex((url) => url.shortURL === shortURL);
    if (index !== -1) {
      // Create a new copy of the shortURLs array with the updated long URL
      const updatedShortURLs = [...shortURLs];
      updatedShortURLs[index] = {
        ...updatedShortURLs[index],
        longURL: updatedLongURL,
      };
      setShortURLs(updatedShortURLs);
    }
  };

  const deleteURL = (shortURL) => {
    setShortURLs(shortURLs.filter((url) => url.shortURL !== shortURL));
  };

  const openLongURL = (longURL) => {
    window.open(longURL, "_blank");
  };

  const generateShortURL = () => {
    // Implement short URL generation logic here
    // This can involve random string generation or using an external service
    // For simplicity, let's generate a random 6-character string
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortURL = "";
    for (let i = 0; i < 6; i++) {
      shortURL += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return shortURL;
  };

  return (
    <div>
      <h1>URL Shortening System</h1>
      <EntryPage createShortURL={createShortURL} />
      <EditPage shortURLs={shortURLs} editURL={editURL} deleteURL={deleteURL} />
      <ListPage shortURLs={shortURLs} openLongURL={openLongURL} />
    </div>
  );
};

export default App;
