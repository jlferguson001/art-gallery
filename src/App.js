import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import ButtonBar from "./components/ButtonBar";
import './App.css';

function App() {
  /* State variables here... */
  let [artId, setArtId] = useState(12720);
  let [data, setData] = useState({});

  useEffect(() => {
    document.title = "Welcome to Artworld";
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, [artId]);

  // send this function down to <ButtonBar />
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  /* Return JSX down here... */

  return (
    <div>
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />

      <ButtonBar />
    </div>
  );
}

export default App;
