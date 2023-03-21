import React, { FC } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button: FC<ButtonProps> = ({
  children,
  color,
  variant,
  disabled,
  sx,
  onClick,
}) => {
  return (
    <MuiButton
      color={color}
      variant={variant}
      disabled={disabled}
      sx={sx}
      onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
