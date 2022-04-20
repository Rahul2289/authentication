import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Paper, Button } from "@mui/material";
const Login = ({ data, setLogin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigation = () => {
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === data.email && password === data.password) {
      console.log(user);
      navigation();
      setLogin(true);
    } else {
      alert("Fill the missing fields or wrong password or email");
    }
  };
  return (
    <Paper className="container">
      <Box>
        <h3 className="login-text">Login</h3>
      </Box>
      <form className="login-form-container" onSubmit={handleSubmit}>
        <p>Email:</p>
        <TextField
          placeholder="email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <p>Password:</p>
        <TextField
          placeholder="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
