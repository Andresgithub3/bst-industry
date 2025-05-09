import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "absolute", bottom: 0 }}>
      <BottomNavigation
        sx={{ height: 70 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Shop" icon={<CheckroomIcon />} />
        <BottomNavigationAction label="Community" icon={<PeopleOutlineIcon />} />
        <BottomNavigationAction label="My Store" icon={<StorefrontIcon />} />
        <BottomNavigationAction label="Saved" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction label="Account" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </Box>
  );
}
