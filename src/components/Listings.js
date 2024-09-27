import React from 'react';
import { Table, TableBody, TableCell, TableRow, Container } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Listings = ({ listings, isLoggedIn, removeListing }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    removeListing(id);
    toast.success("Listing deleted successfully", { autoClose: 1500 });
  };

  const handleListingNavigate = (id) => {
    navigate(`/listings/${id}`);
  }

  return (
    <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
      <ToastContainer />
      {listings === undefined ? (
        <p>Loading listings...</p>
      ) : listings.length === 0 ? (
        <p>No listings available.</p>
      ) : (
        <>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Hours</TableCell>
                {isLoggedIn && <TableCell>Actions</TableCell>}
              </TableRow>

              {listings.map((listing) => (
                <TableRow 
                  key={listing.id}
                  onClick={() => handleListingNavigate(listing.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <TableCell>{listing.name}</TableCell>
                  <TableCell>{listing.description}</TableCell>
                  <TableCell>{listing.address}</TableCell>
                  <TableCell>{listing.hours}</TableCell>
                  {isLoggedIn && (
                    <TableCell>
                      <Delete 
                        style={{ color: 'red', cursor: 'pointer', marginLeft: '15px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(listing.id);
                        }}
                      />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </Container>
  )
}

export default Listings;