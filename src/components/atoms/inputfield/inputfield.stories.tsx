import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from ".";

export default {
  title: "Atoms/TextField",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const InputField = Template.bind({});
InputField.args = {
  variant: "outlined",
  label: "Enter your email",
  color:"secondary",
  size: "small",
  fullWidth:true
};
