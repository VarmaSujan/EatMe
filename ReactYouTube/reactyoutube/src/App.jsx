import YouTube from "react-youtube";
import { useState } from "react";
import {Route, BrowserRouter as router}

export default function App() {
  const [videoId, setVideoId] = useState("1_Aq5rQdPso");

  const options = {
    height: "390",
    width: "640",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="App">
      <YouTube opts={options} videoId={videoId} />

      <button onClick={() => setVideoId("1_Aq5rQdPso")}>
        Golden Eye
      </button>

      <button onClick={() => setVideoId("rwDUWnOVf0c")}>
        Tomorrow Never Dies
      </button>
    </div>
  );
}


