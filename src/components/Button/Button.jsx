import { Button } from "@mui/material";

// Here's a sample usage of this DefaultButton component:

// import DefaultButton from './path/to/DefaultButton';

// pass the text prop to the DefaultButton component and insert whatever text you like, just like so:
// <DefaultButton text={"Click Me"} />

const DefaultButton = ({ text }) => {
  return (
    <Button sx={{ flex: 1, bgcolor: "#fff", color: "#000", borderRadius: 0, '&:hover': { color: '#fff', backgroundColor: '#e7000b'}}}>{text}</Button>
  );
};

export default DefaultButton;
