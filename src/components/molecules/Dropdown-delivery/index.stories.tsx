import {Meta,Story} from '@storybook/react';
import { DropDownDelivery } from '.';
import { DropDownDeliveryProps } from '.';

const meta:Meta ={
    title:'molecules/DropDown-Delivery',
    component:DropDownDelivery,
}
export default meta;
const Template:Story<DropDownDeliveryProps>=(args)=><DropDownDelivery {...args}></DropDownDelivery>
export const DropDownDeliveryOptions = Template.bind({});
DropDownDeliveryOptions.args={
  options:  [ {
        speed: "Instant",
        time: "2-5 minutes",
        fee: "Delivery fees",
        price: "0.001 BTC",
        label:'option 1',
        value:0
      },
      {
        speed: "Faster",
        time: "4 hours",
        fee: "Delivery fees",
        price: "0.0001 BTC",
        label:'option 2',
        value:1
      },
      {
        speed: "Fast",
        time: "120 hours",
        fee: "Delivery fees",
        price: "0.00001 BTC",
        label:'option 3',
        value:2
      },
      {
        speed:'None',
        time:' ',
        fee:'  ',
        price:'  ',
        label:'option 4',
        value:3
        }]}
export { };