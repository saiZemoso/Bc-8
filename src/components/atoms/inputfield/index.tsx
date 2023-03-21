

import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import React from "react";

interface InputProps {
  variant?: "outlined" | "standard" | "filled";
  label?: string;
  placeholder?:string;
  color?: "primary" | "error" | "secondary" | "info" | "success" | "warning";
  size?: "small" | "medium";
  fullWidth?: boolean;
  helperText?: string;
  icon?: JSX.Element;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const Input: React.FC<InputProps & TextFieldProps> = (
  props: InputProps
) => {
  const { placeholder = "Enter Email Id", helperText } = props;
  return (
    <TextField
      variant={props.variant}
      placeholder={placeholder}
      color={props.color}
      helperText={helperText}
      fullWidth={props.fullWidth}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{props.endAdornment}</InputAdornment>
        ),
      }}
      {...props}
    ></TextField>
  );
};