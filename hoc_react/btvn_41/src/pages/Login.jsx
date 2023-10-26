import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import apiConfig from "../api";
import CustomAlert from "../utils/Alert";

function Login() {
  const [email, setEmail] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const loginUser = async () => {
    try {
      const response = await axios.get(`${apiConfig.apiUrl}?email=${email}`);

      if (response.status === 200) {
        setAlertSeverity("success");
        setAlertMessage("Đăng nhập thành công!");
        setOpenAlert(true);
      } else {
        setAlertSeverity("error");
        setAlertMessage(`Đăng nhập thất bại: ${response.data.message}`);
        setOpenAlert(true);
      }
    } catch (error) {
      setAlertSeverity("error");
      setAlertMessage(`Đã xảy ra lỗi: ${error.message}`);
      setOpenAlert(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "100px" }}>
      <Paper
        elevation={3}
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LockOutlinedIcon style={{ fontSize: "40px" }} />
        <Typography variant="h5">Please enter your email:</Typography>
        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={loginUser}
          >
            Đăng nhập
          </Button>
        </form>
        <CustomAlert
          open={openAlert}
          severity={alertSeverity}
          message={alertMessage}
          onClose={() => setOpenAlert(false)}
        />
      </Paper>
    </Container>
  );
}

export default Login;
