import { Grid, ThemeProvider} from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";

type priceProps = {
  currency?: string;
  percentage?: string;
  color?: string;
};

const Price = (props: priceProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid alignItems="end" display={"flex"} flexDirection="column">
        <Typography
          color={theme.palette.textColor.highEmphasis}
          variant="body1"
        >
          {props.currency}
        </Typography>
        <Grid>
          {!props.percentage ? (
            ""
          ) : (
            <Typography
              color={props.color}
              variant="caption2"
            >
              {props.percentage}
            </Typography>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Price;
