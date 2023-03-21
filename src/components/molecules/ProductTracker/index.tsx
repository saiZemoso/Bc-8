import React, { FC } from "react";
import { Grid, Box } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";

type Data = {
  id: number;
  src: string;
  sellingSrc: string;
  iconType: string;
  sellingIconType: string;
  iconDetails: string;
  sellingIconDetails: string;
  padding: string;
  sellingPadding: string;
};

type ProductTrackerProps = {
  isBuy?: boolean;
  data: Data;
};
const ProductTracker: FC<ProductTrackerProps> = ({
  isBuy = true,
  ...props
}) => {
  return (
    <Grid item>
      <DeliveryGrid container>
        <StyledIcon
          item
          padding={isBuy ? props.data.padding : props.data.sellingPadding}
        >
          <Icon src={isBuy ? props.data.src : props.data.sellingSrc} />
        </StyledIcon>
        <Grid item mt="6px">
          <MedTypo variant="caption2">
            {isBuy ? props.data.iconType : props.data.sellingIconType}
          </MedTypo>
          <HighTypo variant="body1">
            {isBuy ? props.data.iconDetails : props.data.sellingIconDetails}
          </HighTypo>
        </Grid>
      </DeliveryGrid>
      {props.data.id < 3 ? <StyledDivider /> : null}
    </Grid>
  );
};

const DeliveryGrid = styled(Grid)({
  flexDirection: "row",
  gap: "8px",
});
const StyledIcon = styled(Grid)({
  backgroundColor: "#E8E8F7",
  borderRadius: "50%",
  width: "42px",
  height: "42px",
  margin: "4px 0px",
});
const StyledDivider = styled(Box)({
  borderLeft: `1px dashed ${theme.palette.greyColors.grey300}`,
  height: "32px",
  marginLeft: "20px",
});
const MedTypo = styled(Typography)({
  color: theme.palette.textColor.mediumEmphasis,
});
const HighTypo = styled(Typography)({
  color: theme.palette.textColor.highEmphasis,
});

export default ProductTracker;
