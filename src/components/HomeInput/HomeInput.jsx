import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { BsQrCodeScan } from "react-icons/bs";

export default function HomeInput() {
  return (
    <Paper component="form" sx={{ p: '2px', display: 'flex', alignItems: 'center', width: "100%", borderRadius: "15px", border: "0.5px solid #9f9fa9", boxShadow: 0 }} >
      <SearchIcon sx={{ ml: '10px' }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search / Scan QR Code'"
        inputProps={{ 'aria-label': 'Search / Scan QR Code' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <BsQrCodeScan />
      </IconButton>
    </Paper>
  );
}
