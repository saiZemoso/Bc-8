import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Slider from "./index";
import theme from "../../../themes";
import Typography from "../Typography";

export default {
  title: "atoms/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;
export const ETH = Template.bind({});
ETH.args = {
  orientation: "vertical",
  sx: {
    color: theme.palette.textColor.lowEmphasis,
    height: "88px",
  },
  marks: [
    {
      value: 50,
      label: (
        <Typography sx={{ color: theme.palette.textColor.lowEmphasis }}>
          1ETH = $1297.93
        </Typography>
      ),
    },
  ],
};
