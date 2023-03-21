import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../themes";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";

interface CryptoCardProps {
  name?: string;
  image?: string;
  alt?: string;
  amount?: string;
  sx?: React.CSSProperties;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const borderColor = isSelected ? theme.palette.primary.primary500 : "none";

  const StyledGrid = styled(Grid)({
    width: "159px",
    height: "156px",
    borderRadius: "4px",
    padding: "22px",
    gap: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    border: `2px solid ${borderColor}`,
    ...props.sx,
  });

  return (
    <>
      <StyledGrid data-testid="crypto-card" onClick={handleClick}>
        {isSelected && (
          <Icon
            src="/media/assets/green_tick.svg"
            style={{ top: "-15px", left: "60px", position: "relative" }}
          />
        )}
        <Icon
          src={props.image}
          alt={props.alt}
          style={{ position: "absolute", width: "56px", height: "56px" }}
        />
        <Grid
          sx={{
            width: "76px",
            height: "40px",
            top: "85px",
            left: "41.5px",
            gap: "2px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <Typography variant="body1">{props.name}</Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "16px",
            }}
          >
            <Typography
              variant="caption1"
              sx={{ color: theme.palette.textColor.mediumEmphasis }}
            >
              ${props.amount}
            </Typography>
          </Grid>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default CryptoCard;
