import { Box, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Avatars from "../../atoms/Avatar";
import Typography from "../../atoms/Typography";
import Date from "../Date";

type coinProps = {
  coinName?: string;
  coinAbbr?: string;       
  coinSrc?: string;
  bgColor?: string;
  hasBgColor?: boolean;
  textColor?: string;
  transactionStatus?: string;
  date?: number;
  month?: string;
  forTransaction?: boolean;
};

const Coin = (props: coinProps) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid display="flex" flexDirection="row">
          {props.forTransaction ? (
              <Date date={props.date} month={props.month}/>
          ) : (
            ""
          )}
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" sx={{ width: "1rem" }} marginLeft={2}>
              <Avatars src={props.coinSrc} size="50" />
              <Box
                display="flex"
                flexDirection="column"
                marginLeft={2}
                marginRight={2}
              >
                <span>
                  <Typography
                    variant='body1'
                    color={theme.palette.textColor.highEmphasis}
                    sx={{ width: "700px"}}
                  >
                    {props.coinName}
                  </Typography>
                </span>
                <Grid display={'flex'} flexDirection='row'>
                  <span>
                    <Typography
                      variant='caption2'
                      color={
                        props.hasBgColor
                          ? props.textColor
                          : props.forTransaction?theme.palette.textColor.highEmphasis :theme.palette.textColor.mediumEmphasis
                      }
                      sx={{
                        padding: props.hasBgColor ? "2px 8px" : "0px",
                        backgroundColor: props.hasBgColor
                          ? props.bgColor
                          : "#FFFF",
                        borderRadius: props.hasBgColor ? "100px" : "0px",
                        display:'inline-block'
                      }}
                    >
                      {props.coinAbbr}
                    </Typography>
                  </span>
                  {props.forTransaction ? (
                    <span>
                    <Typography
                      color={props.textColor}
                      sx={{
                        padding: "2px 8px",
                        backgroundColor: "#F2F2F7",
                        borderRadius: "100px",
                        margin:'0px 20px'
                      }}
                    >
                      {props.transactionStatus}
                    </Typography>
                    </span>
                  ) : (
                    ""
                  )}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Coin;
