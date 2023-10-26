import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";

function CustomAlert({ open, severity, message, onClose }) {
  return (
    <Collapse in={open}>
      <Alert severity={severity} onClose={onClose}>
        <AlertTitle>{severity === "success" ? "Thành công" : "Lỗi"}</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
}

export default CustomAlert;
