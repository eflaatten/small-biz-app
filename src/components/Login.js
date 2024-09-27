import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../redux/store";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const { user } = store.getState();
    if (username === user.username && password === user.password) {
      setLoggedIn(true);

      setTimeout(() => {
        toast.success("Login successful", { autoClose: 1500 });
      }, 500);
      
      const setCookie = (name, value, maxAge) => {
        document.cookie = `${name}=${value};max-age=${maxAge}`;
      };
      setCookie("loggedIn", true, 60 * 1000);
    } else {
      toast.error("Invalid username or password", { autoClose: 1500 });
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