import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Price from "./index";
import theme from "../../../themes";

export default {
  title: "Molecules/Price",
  component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const BitcoinPrice = Template.bind({});
BitcoinPrice.args = {
  currency: "$34,000.00",
  percentage: "+1.06%",
  color: "green",
};

export const EthereumPrice = Template.bind({});
EthereumPrice.args = {
  currency: "$1,297.85",
  percentage: "+6.85%",
  color: "green",
};

export const TetherPrice = Template.bind({});
TetherPrice.args = {
  currency: "$74.28",
  percentage: "-0.01%",
  color: "red",
};

export const XRPPrice = Template.bind({});
XRPPrice.args = {
  currency: "$0.00",
  percentage: "+0.00%",
  color: "green",
};

export const USDCoin = Template.bind({});
USDCoin.args = {
  currency: "$34,000.00",
};

export const BitcoinBTC = Template.bind({});
BitcoinBTC.args = {
  currency: "-0.0234510 BTC",
  percentage: "+$34,000.00",
  color: theme.palette.textColor.mediumEmphasis,
};
