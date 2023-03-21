import * as React from "react";
import { Box, Typography, Tab, Tabs as MuiTabs } from "@mui/material";
import { FC } from "react";

interface TabData {
  label: string;
  content: string;
  value: number;
}

interface Props {
  tabs: TabData[];
}

const Tabs: FC<Props> = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <MuiTabs value={value} onChange={handleChange}>
        {props.tabs.map((tab, index) => (
          <Tab label={tab.label} key={index} />
        ))}
      </MuiTabs>
      {props.tabs.map((tab, index) => (
        <div
          style={{ padding: "10px" }}
          key={index}
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}>
          {value === index && <Typography>{tab.content}</Typography>}
        </div>
      ))}
    </Box>
  );
};
export default Tabs;
