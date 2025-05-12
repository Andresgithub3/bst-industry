import { Button } from "@mui/material";

// Here's a sample usage of this DefaultButton component:

// import DefaultButton from './path/to/DefaultButton';

// pass the text prop to the DefaultButton component and insert whatever text you like, just like so:
// <DefaultButton text={"Click Me"} />

const DefaultButton = ({ isDisabled, onClick, text, customStyle = {} }) => {

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Button onClick={handleClick} disabled={isDisabled} sx={{ ...customStyle, flex: 1, borderRadius: 0, ':focus': {outline: 0} }}>{text}</Button>
  );
};

export default DefaultButton;
