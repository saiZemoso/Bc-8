import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Card from ".";

export default {
  title: "Molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Bitcoin = Template.bind({});
Bitcoin.args = {
  coinName: "Bitcoin",
  coinSrc: "./coins/Bitcoin.png",
  coinAbbr: "BTC",
  currency: "$34,000.00",
  percentage: "+1.06%",
  color: "green",
};
export const Ethereum = Template.bind({});
Ethereum.args = {
  coinName: "Ethereum",
  coinSrc: "./coins/Ethereum.png",
  coinAbbr: "ETH",
  currency: "$1,297.85",
  percentage: "+6.85%",
  color: "green",
};
export const Tether = Template.bind({});
Tether.args = {
  coinName: "Tether",
  coinSrc: "./coins/Tether.png",
  coinAbbr: "USDT",
  currency: "$74.28",
  percentage: "-0.01%",
  color: "red",
};
export const XRP = Template.bind({});
XRP.args = {
  coinName: "XRP",
  coinSrc: "./coins/XRP.png",
  coinAbbr: "XRP",
  currency: "$74.14",
  percentage: "+2.2%",
  color: "green",
};
export const BitcoinBTC = Template.bind({});
BitcoinBTC.args = {
  coinName: "Bitcoin BTC",
  coinSrc: "./coins/success.png",
  coinAbbr: "Sold",
  currency: "-0.0234510 BTC",
  percentage: "+$34,000.00",
  color: "#7D7D89",
  hasBgColor: true,
  bgColor: "#E8E8F7",
  textColor: "#4B4B60",
  forTransaction: false,
  date: 25,
  month: "Feb",
  transactionStatus: "Sold",
};
export const USDCoin = Template.bind({});
USDCoin.args = {
  coinName: "USD Coin",
  coinSrc: "./coins/rupee.png",
  coinAbbr: "US Dollar",
  currency: "$34,000.00",
  percentage: "",
  color: "#7D7D89",
  hasBgColor: false,
  bgColor: "#E8E8F7",
  textColor: "#4B4B60",
  forTransaction: false,
  date: 25,
  month: "Feb",
  transactionStatus: "Sold",
};
export const TrasactionBitcoin = Template.bind({});
TrasactionBitcoin.args = {
  coinName: "Bitcoin Btc",
  coinSrc: "./coins/success.png",
  coinAbbr: "Received from Teja",
  currency: "$1,297.85",
  percentage: "+$3,200",
  color: "#7D7D89",
  hasBgColor: false,
  bgColor: "#E8E8F7",
  textColor: "#4B4B60",
  forTransaction: true,
  date: 25,
  month: "Feb",
  transactionStatus: "Sold",
};
