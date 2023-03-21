import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { FC } from "react";
import Icon from "../../atoms/Icon";
import Coin from "../currencyType";
import Typography from "../../atoms/Typography";
import theme from "../../../themes";
import styled from "@emotion/styled";

interface TradeTabProps {
  id: number;
  name?: string;
  currencyType?: string;
  price?: string;
  change?: number;
  marketCap?: string;
  image?: string;
  isWatchlisted?: boolean;
  sx?: React.CSSProperties;
  toggleStatus: (id: number) => void;
}

const TradeTab: FC<TradeTabProps> = (props) => {
  const amount = props.change || 0;

  const formatNumber = (amount: number) => {
    return amount > 0 ? `+${amount}%` : amount + `%`;
  };

  return (
    <TableRow sx={{ maxHeight: "74px" }}>
      <StyledFirstCell>
        <Coin
          coinName={props.name}
          coinSrc={props.image}
          coinAbbr={props.currencyType}
        />
      </StyledFirstCell>
      <StyledCell>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.textColor.highEmphasis }}
        >
          {props.price}
        </Typography>
      </StyledCell>
      <StyledCell>
        <Typography
          variant="body2"
          sx={{
            color:
              amount > 0
                ? theme.palette.semantic.success500
                : theme.palette.semantic.error500,
          }}
        >
          {formatNumber(amount)}
        </Typography>
      </StyledCell>
      <StyledCell>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.textColor.highEmphasis }}
        >
          {props.marketCap}
        </Typography>
      </StyledCell>
      <StyledLastCell>
        <IconButton
          data-testId="watchlist-button"
          onClick={() => props.toggleStatus(props.id)}
        >
          {props.isWatchlisted ? (
            <Icon src="/media/assets/star_filled.svg" />
          ) : (
            <Icon src="/media/assets/watchlist_star.svg" />
          )}
        </IconButton>
      </StyledLastCell>
    </TableRow>
  );
};

const StyledCell = styled(TableCell)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderLeft: "0px",
  borderRight: "0px",
  padding: "16px 24px",
});

const StyledLastCell = styled(TableCell)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderLeft: "0px",
  borderRadius: "0px 4px 4px 0px",
  padding: "16px 24px",
});
const StyledFirstCell = styled(TableCell)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRight: "0px",
  borderRadius: "4px 0px 0px 4px",
  padding: "14px 18px",
});
export default TradeTab;
