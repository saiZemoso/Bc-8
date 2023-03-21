import React from "react";
import Coin from "../currencyType";
import Price from "../currencyValue";
import { Card as MuiCard, Grid } from "@mui/material";

type cardProps = {
  coinSrc?: string;
  coinName?: string;
  coinAbbr?: string;
  currency?: string;
  percentage?: string;
  color?: string;
  textColor?:string,
  bgColor?:string,
  hasBgColor?:boolean,
  transactionStatus?: string;
  date?: number;
  month?: string;
  forTransaction?: boolean;
};

const Card = (props: cardProps) => {
  return (
    <div>
      <MuiCard elevation={1} sx={{ width: "28vw", px: 2, my: 2 }}>
        <Grid
          display={"flex"}
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}
          padding='10px 10px'
        >
          <Coin
            coinSrc={props.coinSrc}
            coinName={props.coinName}
            coinAbbr={props.coinAbbr}
            hasBgColor={props.hasBgColor}
            bgColor={props.bgColor}
            textColor={props.textColor}
            forTransaction={props.forTransaction}
            transactionStatus={props.transactionStatus}
            date={props.date}
            month={props.month}
          />
          <Price
            currency={props.currency}
            percentage={props.percentage}
            color={props.color}
          />
        </Grid>
      </MuiCard>
    </div>
  );
};

export default Card;
