import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewListing = ({ addListing }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');

  const randomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: randomId(), 
      name,
      description,
      address,
      hours
    };
    addListing(newListing);
    toast.success('Listing added successfully', { autoClose: 1500 });

    setName('');
    setDescription('');
    setAddress('');
    setHours('');
  }

  return (
    <Container style={containerStyle}>
      <h1>Add New Listing</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={textFieldStyle}
          required
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={textFieldStyle}
          required
        />
        <TextField
          label="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          style={textFieldStyle}
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={textFieldStyle}
          required
        />
        <Button color='primary' variant='contained' type='submit' style={{width: '150%'}}>Add</Button>
      </form>
      <ToastContainer />
    </Container>
  )
}

export default AddNewListing;

const containerStyle = {
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem'
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem'
}

const textFieldStyle = {
  width: '150%'
}
