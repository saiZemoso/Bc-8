import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import theme from "../../../themes";
import Chip from "./index";

export default {
  title: "Atoms/Chip",
  component: Chip,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    name: {
      options: [
        "Bitcoin",
        "XRP",
        "Polkadot",
        "Ethereum",
        "Ethereum 2",
        "Dodge Coin",
      ],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args} />
);

export const BitCoin = Template.bind({});
BitCoin.args = {
  name: "Bitcoin",
  bgcolor: theme.palette.info.main,
};
