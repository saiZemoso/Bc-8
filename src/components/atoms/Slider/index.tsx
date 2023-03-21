import React, { FC } from "react";
import { Slider as MuiSlider, SliderProps } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../themes";

const StyledSlider = styled(MuiSlider)({
  "& .MuiSlider-thumb": {
    backgroundImage: `url(${"/media/assets/thumb.svg"})`,
    width: "12px",
    height: "12px",
  },
  "& .MuiSlider-thumb:before": { boxShadow: "none" },
  "& .MuiSlider-rail": {
    backgroundImage: `url(${"/media/assets/slider.svg"})`,
    borderRadius: "0px",
    width: "2px",
  },
});

const Slider: FC<SliderProps> = ({
  orientation = "vertical",
  sx = {
    height: "88px",
    color: theme.palette.textColor.lowEmphasis,
  },
  ...props
}) => {
  return (
    <StyledSlider
      aria-label="slider"
      sx={sx}
      orientation={orientation}
      defaultValue={50}
      track={false}
      {...props}
    />
  );
};

export default Slider;
