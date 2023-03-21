import { Avatar } from "@mui/material";
import React, { FC } from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  variant?: "circular" | "rounded" | "square";
  children?: string | JSX.Element;
  size?: string;
  onClick?: () => void;
};

export const path = "/media/assets/";
export const profile = "profile";
export const google = "google";
export const facebook = "facebook";
export const windows = "windows";

const Avatars: FC<AvatarProps> = ({ size = "20px", ...props }) => {
  return (
    <Avatar
      variant={props.variant}
      src={props.src}
      alt={props.alt}
      sx={{
        width: `${size}`,
        height: `${size}`,
      }}
      {...props}>
      {props.children}
    </Avatar>
  );
};

export default Avatars;
