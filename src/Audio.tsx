import { useEffect, useRef } from "react";
import HLS from "hls.js";

type AudioProps = {
  source: string;
  playing: boolean;
};

export const Audio = ({ source, playing }: AudioProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    ref.current?.play();
  };

  const pause = () => {
    ref.current?.pause();
  };

  useEffect(() => {
    if (!ref.current) return;

    const hls = new HLS();
    hls.loadSource(source);
    hls.attachMedia(ref.current);
  }, []);

  useEffect(() => {
    if (playing) {
      play();
    } else {
      pause();
    }
  }, [playing]);

  return <video loop ref={ref} style={{ display: "none" }} />;
};
