import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const options = ["For You", "Mother's Day", "Women", "Men", "Kids", "Accessories", "Shoes", "Sale", "New Arrivals", "Best Sellers"];

export default function ScrollableButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {options.map((option, index) => (
          <Tab
            key={index}
            label={option}
            sx={{ padding: "0px", mx: "3px" }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
