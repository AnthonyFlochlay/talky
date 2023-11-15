import { Snackbar } from "@mui/base";
import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function ContactByAdress() {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(null);

  function handleSend() {
    const toastMsg = `Message '${message}' sent to address '${address}!'`;
    console.log(toastMsg);
    setToast(toastMsg);
    setAddress("");
    setMessage("");
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast(null);
  };

  return (
    <>
      <h2>Contact by an address</h2>
      <Box display="flex" flexDirection="column" margin="5" gap={1}>
        <TextField
          label="The address of the resident to contact"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <TextField
          multiline
          minRows={3}
          label="The message for the resident"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
      <Snackbar
        open={toast != null}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {toast}
        </Alert>
      </Snackbar>
    </>
  );
}
