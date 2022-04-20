import React, { useState } from "react";

import { Avatar, Paper, Button, TextField } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const Profile = ({ data, login }) => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Paper className="container">
      <Avatar alt="profile" src={file} sx={{ width: 56, height: 56 }} />
      {login ? (
        <>
          {" "}
          <Button aria-label="UploadFile">
            <UploadFileIcon />
            <input type="file" onChange={handleChange} className="files" />
          </Button>
          <h3>
            Name:{data.fname} {data.lname}
          </h3>
          <h3>Email:{data.email}</h3>
          <h3>Phone number:{data.phoneNumber}</h3>
        </>
      ) : (
        <>
          <>
            {" "}
            <h3>Name:</h3>
            <h3>Email:</h3>
            <h3>Phone number:</h3>
          </>
        </>
      )}
    </Paper>
  );
};

export default Profile;
