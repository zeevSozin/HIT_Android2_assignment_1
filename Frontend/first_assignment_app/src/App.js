import "./App.css";
import DataContainer from "./Components/DataContainer.js";
import { useState } from "react";
const BASE_URI = "http://localhost:3000/hottracks";

function App() {
  const [trackList, setTrackList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListShown, setIsListShown] = useState(false);

  async function buttonClicked() {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URI);
      const tracks = await response.json();
      setIsLoading(false);
      setTrackList(tracks);
      setIsListShown(true);
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }

  return (
    <div className="App">
      <h1 className="App-title">Hottest songs</h1>
      <button
        className={`btn ${isListShown ? "btn__transformed" : ""}`}
        onClick={buttonClicked}
        disabled={isLoading}
      >
        {isLoading ? "Loading songs..." : "Get List"}
      </button>

      {!isLoading && <DataContainer data={trackList}></DataContainer>}
    </div>
  );
}

export default App;
