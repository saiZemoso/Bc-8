import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccountDropdown from "./index";

export default {
  title: "Molecules/AccountDropdown",
  component: AccountDropdown,
  argTypes: {
    src: {
      control: { type: "radio" },
      options: [
        "/media/assets/windows.svg",
        "/media/assets/profile.svg",
        "/media/assets/google.svg",
        "/media/assets/facebook.svg",
      ],
    },
  },
} as ComponentMeta<typeof AccountDropdown>;

const Template: ComponentStory<typeof AccountDropdown> = (args) => (
  <AccountDropdown {...args} />
);

export const AccountCard = Template.bind({});
AccountCard.args = {
  src: "/media/assets/profile.svg",
  alt: "dropdown not displayed",
};
