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

      <Audio source="/sounds/rain/rain.m3u8" playing={isPlaying} />
      <Audio volume={0.5} source="/sounds/coffeeshop/coffeeshop.m3u8" playing={isPlaying} />
      <Audio volume={0.1} source="/sounds/thunder/thunder.m3u8" playing={isPlaying} />
    </div>
  );
};
