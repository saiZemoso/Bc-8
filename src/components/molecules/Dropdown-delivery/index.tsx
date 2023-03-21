import Icon from "../../atoms/Icon";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";
import { Select, FormControl, Grid, MenuItem } from "@mui/material";
import React from "react";
import { SelectChangeEvent } from "@mui/material";

export type DropDownDeliveryProps = {
  options: {
    speed: string;
    time: string;
    fee: string;
    price: string;
    label: string;
    value: number;
  }[];
};

export const DropDownDelivery = (props: DropDownDeliveryProps) => {
  const [index, setIndex] = React.useState("0");
  const handleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <FormControl role="form " sx={{ minWidth: "700px", height: "74px" }}>
        <Select
          data-testid="selectId"
          value={index}
          onChange={handleChange}
          role="listbox"
          renderValue={(value) => (
            <Grid
              sx={{
                width: "237px",
                height: "42px",
                top: "16px",
                left: "16px",
                gap: "12px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                src="media/Vectorvehicle.svg"
                style={{ width: "22px", height: "16.01px" }}
              ></Icon>
              <Grid
                sx={{
                  width: "193px",
                  height: "42px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  left: "44px",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.textColor.highEmphasis,
                    fontWeight: "500px",
                    fontSize: "16px",
                  }}
                >
                  {props.options[parseInt(value)].speed}:
                  {props.options[parseInt(value)].time}
                </Typography>
                <Typography
                  variant="caption1"
                  sx={{
                    color: theme.palette.textColor.mediumEmphasis,
                  }}
                >
                  Delivery fee:{props.options[parseInt(value)].price}
                </Typography>
              </Grid>
            </Grid>
          )}
        >
          {props.options.map((option) => (
            <MenuItem key={option.speed} value={option.value} role="menuitem">
              <Grid
                sx={{
                  width: "650px",
                  height: "54px",
                  top: "33px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxShadow: "none",
                }}
              >
                <Grid
                  sx={{
                    width: "663px",
                    height: "54px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "16px 35px 16px 38px",
                    gap: "4px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.textColor.highEmphasis }}
                  >
                    {option.speed}:{option.time}
                  </Typography>
                  <Typography
                    variant="caption2"
                    sx={{ color: theme.palette.textColor.mediumEmphasis }}
                  >
                    {option.fee}:{option.price}
                  </Typography>
                </Grid>
              </Grid>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export {};
