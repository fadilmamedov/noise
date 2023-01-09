import { useState } from "react";

import { PlayIcon, PauseIcon } from "./components/icons";
import { useKeyDown } from "./hooks/useKeyDown";
import { Audio } from "./Audio";
import { VolumeControl } from "./components/VolumeControl";

export const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useKeyDown("Space", () => {
    setIsPlaying((isPlaying) => !isPlaying);
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen relative bg-slate-600">
      <button
        className="w-20 h-20"
        onClick={() => {
          setIsPlaying((isPlaying) => !isPlaying);
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <div className="absolute top-4 right-2 w-20">
        <VolumeControl value={volume} onChange={(volume) => setVolume(volume)} />
      </div>

      <Audio volume={volume} source="/sounds/rain/rain.m3u8" playing={isPlaying} />
      <Audio volume={0.5 * volume} source="/sounds/coffeeshop/coffeeshop.m3u8" playing={isPlaying} />
      <Audio volume={0.1 * volume} source="/sounds/thunder/thunder.m3u8" playing={isPlaying} />
    </div>
  );
};
