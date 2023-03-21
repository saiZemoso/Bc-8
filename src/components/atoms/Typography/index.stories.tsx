import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Typography from "./index";

export default {
  title: "atoms/Typography",
  component: Typography,
  argTypes: {
    align: {
      options: ["center", "inherit", "justify", "left", "right"],
      control: { type: "radio" },
    },
    variant: {
      options: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Typo = Template.bind({});
Typo.args = {
  children: "Bitcoin",
  variant: "h3",
  align: "center",
};
