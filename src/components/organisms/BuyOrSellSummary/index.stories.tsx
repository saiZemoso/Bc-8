import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BuySellSummary from "./index";

export default {
  title: "Organisms/BuySellSummary",
  component: BuySellSummary,
} as ComponentMeta<typeof BuySellSummary>;

const Template: ComponentStory<typeof BuySellSummary> = (args) => (
  <BuySellSummary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isBuy: false,
};
