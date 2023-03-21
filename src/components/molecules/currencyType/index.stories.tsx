import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";
import Coin from './index'

export default {
    title:'Molecules/Coin',
    component:Coin,
    argTypes: {
        coinSrc: {
            control: { type: "radio" },
            options: ['./coins/Bitcoin.png', './coins/USDcoin.png', './coins/Tether.png', './coins/Success.png','./coins/error.png']
        }
    }
}as ComponentMeta<typeof Coin> ;

const Template:ComponentStory<typeof Coin> = (args) => <Coin {...args}/>

export const Bitcoin = Template.bind({});
Bitcoin.args={
    coinSrc:'./coins/Bitcoin.png',
    coinName:'Bitcoin',
    coinAbbr:'BTC'
}
export const USDCoin = Template.bind({})
USDCoin.args={
    coinSrc:'./coins/USDcoin.png',
    coinName:'USD Coin',
    coinAbbr:'US Dollar'
}
export const Tether = Template.bind({})
Tether.args={
    coinSrc:'./coins/Tether.png',
    coinName:'Tether',
    coinAbbr:'Sold',
    hasBgColor:true,
    bgColor:'#E8E8F7',
    textColor:'#4B4B60', 
}
export const Success = Template.bind({})
Success.args={
    coinSrc:'./coins/success.png',
    coinName:'Bitcoin BTC',
    coinAbbr:'From Teja',
    hasBgColor:false,
    bgColor:'#E8E8F7',
    textColor:'#4B4B60',
    forTransaction:true,
    month:'Feb',
    date:10,
    transactionStatus:'purchased'
}
export const TransactionError = Template.bind({});
TransactionError.args={
    coinSrc:'./coins/error.png',
    coinName:'Bitcoin',
    coinAbbr:'From Jane Cooper',
    hasBgColor:false,
    bgColor:'#E8E8F7',
    textColor:'#4B4B60',
    forTransaction:true,
    month:'Feb',
    date:25,
    transactionStatus:'Purchased'
}