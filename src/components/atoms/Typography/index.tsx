import React from "react";
import { ThemeProvider, Typography as MuiTypography } from "@mui/material";
import theme from "../../../themes";

interface TypographyProps {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "caption1"
    | "caption2"
  sx?: React.CSSProperties;
  children?: React.ReactNode;
  color?:string,
}

const Typography: React.FC<TypographyProps> = ({
  align,
  variant,
  sx,
  children,
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <MuiTypography align={align} variant={variant} sx={sx} {...props}>
      {children}
    </MuiTypography>
  </ThemeProvider>
);

export default Typography;
