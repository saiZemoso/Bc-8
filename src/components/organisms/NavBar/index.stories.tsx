import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavBar from "./index";

export default {
  title: "Organisms/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Primary = Template.bind({});
