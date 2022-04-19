import React from "react";
import { TextField, Box, Paper, Button } from "@mui/material";
const Login = () => {
  return (
    <Paper className="container">
      <Box>
        <h3 className="login-text">Login</h3>
      </Box>
      <form className="login-form-container">
        <TextField label="email" type="email" />
        <TextField label="Password" type="password" />
        <Button variant="contained">Login</Button>
      </form>
    </Paper>
  );
};

export default Login;
