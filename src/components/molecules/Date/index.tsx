import { Grid } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";

type dateProps = {
  date?: number;
  month?: string;
};

const Date = (props: dateProps) => {
  return (
    <Grid display={"flex"} flexDirection="column">
      <Typography
        variant="caption2"
        color={theme.palette.textColor.mediumEmphasis}
      >
        {props.month}
      </Typography>
      <Typography
        color={theme.palette.textColor.highEmphasis}
        variant="subtitle1"
      >
        {props.date}
      </Typography>
    </Grid>
  );
};

export default Date;
