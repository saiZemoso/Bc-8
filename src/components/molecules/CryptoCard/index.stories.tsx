import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CryptoCard from "./index";

export default {
  title: "Molecules/CryptoCard",
  component: CryptoCard,
  argTypes: {
    image: {
      control: { type: "radio" },
      options: [
        "/media/assets/etherum.svg",
        "/media/assets/bitcoin.svg",
      ],
    },
    name: {
      control: { type: "radio" },
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
  },
} as ComponentMeta<typeof CryptoCard>;

const Template: ComponentStory<typeof CryptoCard> = (args) => (
  <CryptoCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  name:"Bitcoin",
  amount:"3,406,069.54",
  image:"/media/assets/bitcoin.svg",
};
