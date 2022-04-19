import React from "react";

import { TextField, Box, Paper, Button } from "@mui/material";
const Signup = () => {
  return (
    <Paper className="container">
      <Box>
        <h3 className="signup-text">SignUp</h3>
      </Box>
      <form className="signup-form-container">
        <TextField label="First name" type="text" />
        <TextField label="Last name" type="text" />
        <TextField label="email" type="email" />
        <TextField label="phone number" type="number" />
        <TextField label="Password" type="password" />
        <Button variant="contained">Sign Up</Button>
      </form>
    </Paper>
  );
};

export default Signup;
