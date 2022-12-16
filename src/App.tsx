import { useState } from "react";

import rain from "./assets/rain.mp4";
import thunder from "./assets/thunder.mp4";

import { Audio } from "./Audio";
import { PlayIcon, PauseIcon } from "./components/icons";

export const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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

      <Audio source={rain} playing={isPlaying} />
      <Audio source={thunder} playing={isPlaying} />
    </div>
  );
};
