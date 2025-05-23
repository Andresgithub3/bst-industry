import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';


export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, right: 0, left: 0 }} elevation={3}>
      <BottomNavigation
        sx={{ height: 70 }}
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Shop" icon={<CheckroomIcon />} />
        <BottomNavigationAction label="Community" icon={<PeopleOutlineIcon />} onClick={() => navigate('/welcome')} />
        <BottomNavigationAction sx={{ textWrap: "nowrap" }} label="My Store" icon={<StorefrontIcon />} />
        <BottomNavigationAction label="Saved" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction label="Account" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </Box>
  );
}
