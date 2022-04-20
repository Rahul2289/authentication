import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Paper, Button } from "@mui/material";
const Signup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [people, setPeople] = useState([]);

  const { fname, lname, email, phoneNumber, password } = users;

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(users));
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname && lname && email && phoneNumber && password) {
      const newPerson = { ...users, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      navigate("/login");

      console.log("people:", people);
      console.log("users:", users);
    } else {
      alert("some fileds are empty ");
    }
  };
  return (
    <Paper className="container">
      <Box>
        <h3 className="signup-text">Signup</h3>
      </Box>
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <label>first name:</label>
        <TextField
          placeholder="First name"
          type="text"
          name="fname"
          value={fname}
          onChange={handleChange}
        />
        <label>Last name:</label>
        <TextField
          placeholder="Last name"
          type="text"
          value={lname}
          name="lname"
          onChange={handleChange}
        />
        <label>Email:</label>
        <TextField
          placeholder="email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <label>Phone Number:</label>
        <TextField
          placeholder="phone number"
          type="number"
          value={phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />
        <label>Password:</label>
        <TextField
          placeholder="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Create account
        </Button>
      </form>
    </Paper>
  );
};

export default Signup;
