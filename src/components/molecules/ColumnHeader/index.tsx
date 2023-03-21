import { TableCell, TableRow } from "@mui/material";
import React, { FC } from "react";
import Icon from "../../atoms/Icon";
import styled from "@emotion/styled";
import Typography from "../../atoms/Typography";
import theme from "../../../themes";

const ColumnHeader: FC = () => {
  return (
    <StyledRow>
      <TableCell sx={{ minWidth: "300px" }}>
        <StyledTypography variant="caption1">Name</StyledTypography>
      </TableCell>
      <TableCell sx={{ minWidth: "337px" }}>
        <StyledTypography variant="caption1">Price</StyledTypography>
      </TableCell>
      <TableCell sx={{ minWidth: "238px" }}>
        <StyledTypography variant="caption1">Change</StyledTypography>
      </TableCell>
      <TableCell sx={{ minWidth: "238px" }}>
        <StyledTypography variant="caption1">
          Market Cap
          <Icon src="media/assets/switch.svg" style={{ marginLeft: "16px" }} />
        </StyledTypography>
      </TableCell>
      <TableCell sx={{ minWidth: "78px" }}>
        <StyledTypography variant="caption1">Watch</StyledTypography>
      </TableCell>
    </StyledRow>
  );
};

export const StyledRow = styled(TableRow)({
  "& .MuiTableCell-root": {
    padding: "0px 24px",
    borderBottom: "none",
  },
  height: "42px",
});
export const StyledTypography = styled(Typography)({
  color: theme.palette.greyColors.grey500,
});

export default ColumnHeader;
