import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DropDown from "./index";

export default {
  title: "Atoms/DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const Small = Template.bind({});
Small.args = {
  options: [
    { label: "English", value: "0" },
    { label: "Telugu", value: "1" },
    { label: "Hindi", value: "2" },
    { label: "Tamil", value: "3" },
    { label: "Malayalam", value: "4" },
  ],
  message: "Select options",
  height: "40px",
  width: "100px",
};
export const Medium = Template.bind({});
Medium.args = {
  ...Small.args,
  height: "40px",
  width: "122px",
};
export const Large = Template.bind({});
Large.args = {
  ...Small.args,
  height: "42px",
  width: "170px",
};
