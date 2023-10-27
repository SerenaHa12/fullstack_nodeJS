import { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import apiConfig from "../api/apiConfig";
import CustomAlert from "../utils/Alert";
import { useNavigate } from "react-router-dom";
// import Loading from "../components/Loading";

function Login() {
  const [email, setEmail] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  // const [loading, setLoading] = useState(true);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, status } = await axios.get(`${apiConfig.apiUrl}/api-key`, {
        params: {
          email: email,
        },
      });

      if (status === 200) {
        const apiKey = data.data.apiKey;
        localStorage.setItem("apiKey", apiKey);
        // console.log(apiKey);
        setAlertSeverity("success");
        setAlertMessage("Login Success!");

        setTimeout(() => {
          setOpenAlert(true);
          // setLoading(true);
          navigate("/home");
        }, 2000);
      } else {
        setAlertSeverity("error");
        setAlertMessage(`Login Fail: ${data.message}`);
        setOpenAlert(true);
      }
    } catch (error) {
      setAlertSeverity("error");
      setAlertMessage(`Error: ${error.response.data.message}`);
      setOpenAlert(true);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
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
        <Typography variant="h5" style={{ fontSize: "20px" }}>
          Please enter your email:
        </Typography>
        <form onKeyPress={handleEnterKey}>
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
            onClick={handleLogin}
          >
            authentication
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
