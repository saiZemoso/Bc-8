import { Grid } from "@mui/material";
import React from "react";
import Avatars from "../../atoms/Avatar";
import Icon from "../../atoms/Icon";
import styled from "@emotion/styled";

interface AccountDropdownProps {
  src?: string;
  alt?: string;
  sx?: React.CSSProperties;
}

const StyledGrid = styled(Grid)({
  height: "32px",
  width: "64px",
  left: "294px",
  top: "5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
});

const AccountDropdown: React.FC<AccountDropdownProps> = ({ ...props }) => {
  return (
    <>
      <StyledGrid>
        <Avatars src={props.src} alt={props.alt} size="32px"></Avatars>
        <Icon
          src="/media/assets/dropdown.svg"
          alt="dropdown not visible"
        ></Icon>
      </StyledGrid>
    </>
  );
};

export default AccountDropdown;
