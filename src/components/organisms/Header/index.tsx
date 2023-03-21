import { Grid, Box } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import theme from "../../../themes";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import AvatarIcon from "../../molecules/AccountDropdown";

interface HeaderProps {
  label?: string;
  showButtons?: boolean;
}

const StyledGrid = styled(Grid)({
  height: "82px",
  width: "1397px",
  left: "80px",
  top: "0px",
  gap: "704px",
  padding: "20px 24px 20px 24px",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "absolute",
  borderRadius: "0px",
});

const InnerStyledGrid = styled(Grid)({
  width: "358px",
  height: "42px",
  left: "879px",
  gap: "21px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  order: 1,
  justifyContent: "flex-end",
});

const StyledBox = styled(Box)({
  height: "42px",
  width: "252px",
  gap: "12px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
});

const Buttonheaders = ["SELL", "BUY"];

const handleClick = () => {
  //this is mock function. Has to be changed based on its functionality.
  console.log("this will display sell/buy section");
};

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <StyledGrid>
      <Typography
        variant="h6"
        sx={{ color: theme.palette.textColor.highEmphasis }}
      >
        {props.label}
      </Typography>
      <InnerStyledGrid>
        {props.showButtons && (
          <StyledBox>
            {Buttonheaders.map((e) => (
              <Button
                key={e}
                sx={{
                  width: "120px",
                  height: "42px",
                  padding: "0px 16px",
                  gap: "10px",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    backgroundColor:
                      e === "SELL"
                        ? theme.palette.semantic.warning300
                        : theme.palette.primary.primary500,
                  },
                  backgroundColor:
                    e === "SELL"
                      ? theme.palette.semantic.warning300
                      : theme.palette.primary.primary500,
                }}
                onClick={handleClick}
              >
                <Typography variant="button">{e}</Typography>
              </Button>
            ))}
          </StyledBox>
        )}

        <Icon src="/media/assets/vector.svg" alt="vector" />
        <AvatarIcon
          src={"/media/assets/profile.svg"}
          alt={"avatar not loaded"}
        ></AvatarIcon>
      </InnerStyledGrid>
    </StyledGrid>
  );
};

export default Header;
