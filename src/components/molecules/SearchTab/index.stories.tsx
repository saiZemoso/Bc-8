import React from "react";
import { ComponentStory } from "@storybook/react";
import { ComponentMeta } from "@storybook/react";
import { SearchTab } from ".";

export default {
  title: "Molecules/SearchTab",
  component: SearchTab,
} as ComponentMeta<typeof SearchTab>;

const Template: ComponentStory<typeof SearchTab> = (args) => <SearchTab {...args} />;


export const filter = Template.bind({});
filter.args = {
  type:"filter",
};

export const search = Template.bind({});
search.args = {
  type:"search",
};
