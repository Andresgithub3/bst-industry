import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { ModalContext } from "../../context/usercontext";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100vh",
  bgcolor: "#ff000990",
  boxShadow: 24,
  p: 4,
  color: "#fff",
};

export default function KeepMountedModal() {
  const { open, setOpen } = useContext(ModalContext);
  const handleClose = () => setOpen(false);

  setTimeout(() => {
    handleClose();
  } , 1500);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <h1 className="font-bold text-4xl">Confirmed!</h1>
          <p className="font-bold">You've successfully signed up for this event</p>
        </Box>
      </Modal>
    </div>
  );
}
