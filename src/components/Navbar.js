import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = ({ login, setLogin }) => {
  return (
    <AppBar position="static" style={{ background: "#efebe9", color: "black" }}>
      <Toolbar>
        <Typography variant="h5">Profile</Typography>
        {login ? (
          <>
            <Button
              sx={{ marginLeft: "auto" }}
              ml="2"
              variant="outlined"
              onClick={() => {
                setLogin(false);
              }}
            >
              {" "}
              Logout
            </Button>
          </>
        ) : (
          <>
            {" "}
            <Button sx={{ marginLeft: "auto" }} ml="2" variant="outlined">
              <Link style={{ textDecoration: "none" }} to="/login">
                {" "}
                Login
              </Link>
            </Button>
            <Button variant="outlined" sx={{ marginLeft: "5px" }}>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                {" "}
                Signup{" "}
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
