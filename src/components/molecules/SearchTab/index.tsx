import { IconButton } from "@mui/material";
import React from "react";
import { Input } from "../../atoms/inputfield";
import Icon from "../../atoms/Icon";
import Stack from "@mui/material/Stack";

interface SearchProps {
  type: string;
}

export const SearchTab = (props: SearchProps) => {
  const { type } = props;
  const [searchValue, setSearch] = React.useState(false);
  const [filterValue, setFilter] = React.useState(false);

  return (
    <>
      <Input
        variant="outlined"
        size="medium"
        placeholder="Search All Assets"
        data-testid="element-to-focus"
        endAdornment={
          <>
            {type === "filter" ? (
              <Stack direction="row" spacing={2}>
                <IconButton
                  edge="end"
                  onClick={() => {
                    setSearch(true);
                  }}
                >
                  <Icon src="./media/assets/searchIcon.svg" alt="search Icon" />
                </IconButton>
                <Icon src="./media/assets/divider.svg" alt="divider Icon" />
                <IconButton
                  edge="end"
                  onClick={() => {
                    setFilter(true);
                  }}
                >
                  <Icon src="./media/assets/filterIcon.svg" alt="filter Icon" />
                </IconButton>
              </Stack>
            ) : (
              <IconButton
                edge="end"
                onClick={() => {
                  setSearch(true);
                }}
              >
                <Icon
                  data-testid="icon"
                  src="./media/assets/searchIcon.svg"
                  alt="search Icon"
                />
              </IconButton>
            )}
          </>
        }
      />
    </>
  );
};
