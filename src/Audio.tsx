import { useEffect, useRef } from "react";
import HLS from "hls.js";

type AudioProps = {
  source: string;
  playing: boolean;
  volume?: number;
};

export const Audio = ({ source, playing, volume = 1 }: AudioProps) => {
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
    if (!ref.current) return;

    ref.current.volume = volume;
    ref.current.playbackRate = 5;
  }, [volume]);

  useEffect(() => {
    if (playing) {
      play();
    } else {
      pause();
    }
  }, [playing]);

  return <video loop ref={ref} style={{ display: "none" }} />;
};
