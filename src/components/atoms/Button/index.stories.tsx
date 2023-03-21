import React from "react";
import { ComponentStory } from "@storybook/react";
import { ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  variant: "contained",
  children: "click me",
};
export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  variant: "contained",
  children: "click me",
};
export const Medium = Template.bind({});
Medium.args = {
  color: "primary",
  variant: "contained",
  children: "click me",
  sx: { height: "42px", width: "109px" },
};
export const Large = Template.bind({});
Large.args = {
  color: "primary",
  variant: "contained",
  children: "click me",
  sx: { height: "42px", width: "100%" },
};
