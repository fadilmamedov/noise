import { useEffect, useRef } from "react";

type AudioProps = {
  source: string;
  playing: boolean;
};

export const Audio = ({ source, playing }: AudioProps) => {
  const ref = useRef<HTMLAudioElement>(null);

  const play = () => {
    ref.current?.play();
  };

  const pause = () => {
    ref.current?.pause();
  };

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
