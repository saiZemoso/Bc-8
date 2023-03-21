import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PaymentCards from "./index";

export default {
  title: "Molecules/PaymentCards",
  component: PaymentCards,
  argTypes: {},
} as ComponentMeta<typeof PaymentCards>;

const Template: ComponentStory<typeof PaymentCards> = (args) => (
  <PaymentCards {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      value: 1,
      cardno: "8845",
      cardsrc: "/media/assets/visa.svg",
      width: "28px",
      height: "8px",
    },
    {
      value: 2,
      cardno: "8846",
      cardsrc: "/media/assets/master.svg",
      width: "26px",
      height: "21px",
    },
  ],
};
