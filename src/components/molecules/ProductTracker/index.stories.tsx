import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductTracker from "./index";

export default {
  title: "Molecules/ProductTracker",
  component: ProductTracker,
} as ComponentMeta<typeof ProductTracker>;

const Template: ComponentStory<typeof ProductTracker> = (args) => (
  <ProductTracker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isBuy: false,
  data: {
    id: 1,
    src: "/media/assets/card.svg",
    sellingSrc: "/media/assets/bitcoin.svg",
    iconType: "Payment method",
    sellingIconType: "Paying Through",
    iconDetails: "Visa Card ...8843",
    sellingIconDetails: "Bitcoin wallet",
    padding: "12px",
    sellingPadding: "10px",
  },
};
export const Secondary = Template.bind({});
Secondary.args = {
  isBuy: true,
  data: {
    id: 3,
    src: "/media/assets/wallet.svg",
    sellingSrc: "/media/assets/dollar.svg",
    iconType: "Deposit to",
    sellingIconType: "Deposit to",
    iconDetails: "Bitcoin wallet",
    sellingIconDetails: "Rupee Coin",
    padding: "12px",
    sellingPadding: "11px 0px 0px 15px",
  },
};
