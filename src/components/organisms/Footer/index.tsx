import { Grid } from "@mui/material";
import React, { FC } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../themes";
import styled from "@emotion/styled";
import Dropdown from "../../atoms/DropDown";
import Button from "../../atoms/Button";

const Footer: FC = () => {
  return (
    <StyledGrid
      container
      left="80px"
      bottom="0px"
      position="fixed"
      sx={{ backgroundColor: theme.palette.greyColors.greyWhite }}
      borderTop={`1px solid ${theme.palette.greyColors.grey100}`}
      p="24px"
      minHeight="90px"
      maxWidth="1450px">
      <Grid item maxWidth="432px">
        <StyledGrid container gap="24px">
          <StyledTypography>Dashboard</StyledTypography>
          <StyledTypography>Careers</StyledTypography>
          <StyledTypography>Legal & Privacy</StyledTypography>
          <Typography sx={{ color: theme.palette.textColor.highEmphasis }}>
            © 2021 Minet
          </Typography>
        </StyledGrid>
      </Grid>
      <Grid item justifyContent="end">
        <Grid container gap="16px">
          <Dropdown
            options={[
              { label: "Telugu", value: "1" },
              { label: "Hindi", value: "2" },
              { label: "Tamil", value: "3" },
              { label: "Malayalam", value: "4" },
            ]}
            message="English"
            height="42px"
            width="170px"
            onChange={(e) => console.log(e)}
          />
          <Button
            sx={{
              width: "109px",
              height: "42px",
              color: theme.palette.primary.primary500,
              borderColor: theme.palette.primary.primary500,
              ":hover": { borderColor: theme.palette.primary.primary500 },
            }}
            variant="outlined">
            Need Help
          </Button>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)({
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledTypography = styled(Typography)({
  color: theme.palette.primary.primary500,
});

export default Footer;
