import React, { FC, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Icon from "../../atoms/Icon";
import theme from "../../../themes";
import data from "../../../data/db.json";
import styled from "@emotion/styled";

const StyledStack = styled(Stack)({
  padding: "24px",
  height: "auto",
  width: "80px",
  backgroundColor: theme.palette.greyColors.main,
  borderRight: `1px solid ${theme.palette.greyColors.grey100}`,
  position: "fixed",
});

const ColoredTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.greyColors.grey500,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.greyColors.grey500,
  },
});

type IconsProps = {
  id?: number;
  src?: string;
  filledsrc?: string;
  alt: string;
  width?: string;
  height?: string;
  mb?: string;
  isClicked?: string;
};

const NavBar: FC = () => {
  const [isClicked, setIsClicked] = useState<number | undefined>(2);
  const handleClick = (icon: IconsProps) => {
    console.log(`${icon.id} clicked`);
    setIsClicked(icon.id);
  };

  return (
    <StyledStack>
      {data.navbar.map((icon: IconsProps) => (
        <ColoredTooltip key={icon.id} title={icon.alt} placement="right" arrow>
          <IconButton onClick={() => handleClick(icon)} sx={{ mb: icon.mb }}>
            <Icon
              src={isClicked === icon.id ? icon.filledsrc : icon.src}
              alt={icon.alt}
              style={{
                width: icon.width,
                height: icon.height,
              }}
            />
          </IconButton>
        </ColoredTooltip>
      ))}
    </StyledStack>
  );
};

export default NavBar;
