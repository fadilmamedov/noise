import { useState } from "react";

import rain from "./assets/rain.mp4";
import thunder from "./assets/thunder.mp4";

import { Audio } from "./Audio";
import { PlayIcon, PauseIcon } from "./components/icons";
import { useKeyDown } from "./hooks/useKeyDown";

export const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useKeyDown("Space", () => {
    setIsPlaying((isPlaying) => !isPlaying);
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-600">
      <button
        className="w-20 h-20"
        onClick={() => {
          setIsPlaying((isPlaying) => !isPlaying);
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <Audio volume={1} source={rain} playing={isPlaying} />
      <Audio volume={0.3} source={thunder} playing={isPlaying} />
    </div>
  );
};
