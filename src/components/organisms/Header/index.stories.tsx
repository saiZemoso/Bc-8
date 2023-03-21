import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./index";

export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
    label: {
      control: { type: "radio" },
      options: ["Dashboard", "Trade"],
    },
    showButtons: {
      control: { type: "radio" },
      options: [true, false],
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderCard = Template.bind({});
HeaderCard.args = {
  label: "Dashboard",
  showButtons: true,
};
