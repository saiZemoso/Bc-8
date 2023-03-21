import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./index";

export default {
  title: "Atoms/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Tab1 = Template.bind({});
Tab1.args = {
  tabs: [{ label: "All Assets", value: 0, content: "Tab All Aassets" }],
};

export const Tab2 = Template.bind({});
Tab2.args = {
  ...Tab1.args,
  tabs: [{ label: "overview", value: 0, content: "Tab overview" }],
};

export const Tab3 = Template.bind({});
Tab3.args = {
  ...Tab2.args,
  tabs: [{ label: "Wallet", value: 0, content: "Tab Wallet" }],
};
