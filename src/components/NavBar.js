import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ isLoggedIn, logout, username }) => {

  const handleLogout = () => {
    try {
      logout();

      setTimeout(() => {
        toast.success("Logout successful", { autoClose: 1500 });
      }, 500);

      document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed", { autoClose: 2000 });
    }
  };

  
  return (
    <AppBar position='static'>
      <ToastContainer />
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Small Business Listings App
        </Typography>
        <nav>
          <Link to='/listings' style={linkStyle}>Listings</Link>
          
          {isLoggedIn && (
            <Link to='/listings/new' style={linkStyle}>Add</Link>
          )}

          {isLoggedIn ? (
            <span onClick={handleLogout} style={linkStyle}>Logout</span>
          ) : (
            <Link to='/login' style={linkStyle}>Login</Link>
          )}
        </nav>
      </Toolbar>
      {isLoggedIn && (
        <Typography variant='h6' style={loggedInStyle}>
          Logged in as {username}
        </Typography>
      )}
    </AppBar>
  );
};

export default NavBar;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  padding: "6px 8px",
  fontSize: "0.875rem",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 500,
  lineHeight: 1.75,
  borderRadius: "4px",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  cursor: "pointer",
};

const loggedInStyle = {
  flexGrow: 1,
  backgroundColor: 'gray',
  color: 'white',
  paddingLeft: '10px',
  fontSize: '0.875rem',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 500,
}