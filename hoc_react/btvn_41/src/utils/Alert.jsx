
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";

function CustomAlert({ open, severity, message, onClose }) {
  const alertStyle = {
    position: "fixed",
    top: "0",
    right: "0",
    transform: "translate(0, 0)",
    zIndex: "1000",
    margin: "16px",
  };

  return (
    <Collapse in={open}>
      <div style={alertStyle}>
        <Alert severity={severity} onClose={onClose}>
          <AlertTitle>{severity === "success" ? "Success" : "Fail"}</AlertTitle>
          {message}
        </Alert>
      </div>
    </Collapse>
  );
}

export default CustomAlert;
