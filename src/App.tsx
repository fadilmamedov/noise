import { useState } from "react";

import { PlayIcon, PauseIcon } from "./components/icons";
import { useKeyDown } from "./hooks/useKeyDown";
import { Audio } from "./Audio";

export const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useKeyDown("Space", () => {
    setIsPlaying((isPlaying) => !isPlaying);
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-600">
      <video id="video" style={{ display: "none" }}></video>

      <button
        className="w-20 h-20"
        onClick={() => {
          setIsPlaying((isPlaying) => !isPlaying);
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <Audio source="/rain.m3u8" playing={isPlaying} />

      {/* <Audio volume={1} source={rain} playing={isPlaying} /> */}
      {/* <Audio volume={0.3} source={thunder} playing={isPlaying} /> */}
    </div>
  );
};
