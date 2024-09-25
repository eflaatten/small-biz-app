import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

const AddNewListing = ({ addListing }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: Date.now(), // Generate a unique ID
      name,
      description,
      address,
      hours
    };
    addListing(newListing);

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
