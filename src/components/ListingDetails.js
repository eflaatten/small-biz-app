import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

import Map from '../containers/Map';

const ListingDetails = () => {
  const { id } = useParams();
  const listing = useSelector(state => state.listings.find(listing => listing.id === parseInt(id, 10)));

  console.log('ListingDetails - Current listing:', listing);

  if (!listing) {
    return <Container><Typography>Listing not found</Typography></Container>;
  }

  return (
    <Container style={containerStyle}>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="auto" mb={2}>
        <Typography variant="h4">{listing.name}</Typography>
        <Button component={Link} to="/listings" variant="contained" color="primary" style={{marginLeft: '20px'}}>
          Back to Listings
        </Button>
      </Box>
      <Typography variant="body1" gutterBottom>{listing.address}</Typography>
      <Typography variant="body1" gutterBottom>{listing.hours}</Typography>
      <Typography variant="body1" gutterBottom>{listing.description}</Typography>
      <Map filterId={listing.id} />
    </Container>
  );
};

export default ListingDetails;

const containerStyle = {
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
  textAlign: 'left',
  alignContent: 'center',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: '100%'
}
