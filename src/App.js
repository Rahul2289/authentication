import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
function App() {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("form")));
  }, []);
  return (
    <BrowserRouter>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Profile data={data} login={login} />} />
        <Route
          path="/login"
          element={<Login data={data} setLogin={setLogin} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
