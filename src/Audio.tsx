import { useEffect, useRef } from "react";

type AudioProps = {
  source: string;
  volume: number;
  playing: boolean;
};

export const Audio = ({ source, volume, playing }: AudioProps) => {
  const ref = useRef<HTMLAudioElement>(null);

  const play = () => {
    ref.current?.play();
  };

  const pause = () => {
    ref.current?.pause();
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, []);

  useEffect(() => {
    if (playing) {
      play();
    } else {
      pause();
    }
  }, [playing]);

  return (
    <audio preload="auto" loop ref={ref}>
      <source src={source} />
    </audio>
  );
};
