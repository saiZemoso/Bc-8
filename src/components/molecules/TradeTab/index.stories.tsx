import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TradeTab from "./index";

export default {
  title: "Molecules/TradeTab",
  component: TradeTab,
  argTypes: {
    image: {
      control: { type: "radio" },
      options: ["/media/assets/etherum.svg", "/media/assets/bitcoin.svg"],
    },
    name: {
      control: { type: "select" },
      options: [
        "Bitcoin",
        "Ethereum",
        "Binance",
        "Tether",
        "Cardano",
        "XRP",
        "Dogecoin",
        "Polkadot",
      ],
    },
    currencyType:{
        control:{type :'radio'},
        options:['BTC','ETH','USDT','XRP','BNB'],
    },
    marketCap:{
        control:{type:'radio'},
        options:['$60.1T','$25.4T','$4.6T','$2.3T']
    }
  },
} as ComponentMeta<typeof TradeTab>;

const Template: ComponentStory<typeof TradeTab> = (args) => (
  <TradeTab {...args} />
);

export const RowCard = Template.bind({});
RowCard.args = {
  name: "Bitcoin",
  currencyType:"BTC",
  price: "$3,406,069.54",
  image: "/media/assets/bitcoin.svg",
  change:-1.25,
  marketCap:'$60.1T'
};
