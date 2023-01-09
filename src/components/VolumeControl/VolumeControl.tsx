import classes from "./VolumeControl.module.css";

type VolumeControlProps = {
  value: number;
  onChange: (value: number) => void;
};

export const VolumeControl = ({ value, onChange }: VolumeControlProps) => {
  return (
    <input
      type="range"
      value={value}
      min={0}
      max={1}
      step={0.01}
      className={classes.slider}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
};
