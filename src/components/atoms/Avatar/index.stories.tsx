import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatars, { path, profile, google, facebook, windows } from ".";

export default {
  title: "Atoms/Avatars",
  component: Avatars,
  argTypes: {
    src: {
      control: { type: "radio" },
      options: [
        `${path}${profile}.svg`,
        `${path}${google}.svg`,
        `${path}${facebook}.svg`,
        `${path}${windows}.svg`,
      ],
    },
    size: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["circular", "square", "rounded"],
    },
    alt: {
      control: { type: "select" },
      options: [profile, google, facebook, windows],
    },
  },
} as ComponentMeta<typeof Avatars>;

const Template: ComponentStory<typeof Avatars> = (args) => (
  <Avatars {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  src: `${path}${profile}.svg`,
  alt: profile,
  size: "32px",
  variant: "circular",
};
