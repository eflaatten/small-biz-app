import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin@12345") {
      setLoggedIn(true);
      console.log("show toast success attempt")
      
      const setCookie = (name, value, maxAge) => {
        document.cookie = `${name}=${value};max-age=${maxAge}`;
      };
      setCookie("loggedIn", true, 60 * 1000);
      toast.success("Login successful");
      navigate("/listings");
    } else {
      toast.error("Invalid username or password");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={loginContainerStyle}>
      <h1>Login</h1>
      <TextField
        style={textFieldStyle}
        label='Username'
        variant='outlined'
        margin='normal'
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <TextField
        style={textFieldStyle}
        label='Password'
        type='password'
        variant='outlined'
        margin='normal'
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <Button variant='contained' color='primary' style={buttonStyle} onClick={handleLogin}>
        Login
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Login;

const loginContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
};

const textFieldStyle = {
  margin: "1rem",
  width: "20rem",
};

const buttonStyle = {
  margin: "1rem",
  width: "20rem",
};