import React from "react";
import { Chip as MuiChip} from "@mui/material";

interface ChipProps {
  name: string;
  bgcolor: string;
  borderColor: string;
  size?: "medium" | "small";
  onClick?:()=>void,
}

const Chip: React.FC<ChipProps> = ({ name, bgcolor, borderColor, size, ...props}) => {
  const style = {
    backgroundColor: bgcolor,
    borderRadius: "4px",
    border: `2px solid ${borderColor}`,
  };
  return <MuiChip label={name} sx={style} size={size} {...props}/>;
};

export default Chip;
