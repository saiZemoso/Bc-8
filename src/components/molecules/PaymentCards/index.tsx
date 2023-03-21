import { Stack, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { FC } from "react";
import Icon from "../../atoms/Icon";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";

type PaymentCardsProps = {
  value: number;
  cardno: string;
  cardsrc: string;
  width: string;
  height: string;
};

type CardsProps = {
  data: PaymentCardsProps[];
};

const PaymentCards: FC<CardsProps> = (props) => {
  return (
    <Stack>
      <RadioGroup name="paymentcards">
        {props.data.map((card) => (
          <Stack direction="row" mb="36px" key={card.value}>
            <FormControlLabel
              control={<Radio />}
              label={
                <Stack ml="10px">
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.textColor.highEmphasis }}>
                    Ending in : {card.cardno}
                  </Typography>
                  <Typography
                    variant="caption2"
                    sx={{ color: theme.palette.textColor.lowEmphasis }}>
                    Last time used :
                    <Typography
                      variant="caption1"
                      sx={{ color: theme.palette.textColor.mediumEmphasis }}>
                      Thu, Mar 18 2021
                    </Typography>
                  </Typography>
                </Stack>
              }
              value={card.value}
              sx={{
                "& .Mui-checked": {
                  color: `${theme.palette.primary.primary500} !important`,
                },
              }}
            />
            <Stack justifyContent="center" ml="90px">
              <Icon
                src={card.cardsrc}
                style={{ width: card.width, height: card.height }}
              />
            </Stack>
          </Stack>
        ))}
      </RadioGroup>
    </Stack>
  );
};

export default PaymentCards;
