import React from "react";
import Icon from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Grid = Template.bind({});
Grid.args = {
  src: "./media/assets/grid.svg",
  alt: "grid not found",
};
