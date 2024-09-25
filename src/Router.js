import { Routes, Route } from "react-router-dom";

import Login from "./containers/Login"; 
import Listings from "./containers/Listings";
import AddNewListing from "./containers/AddNewListing";
import ListingDetails from "./components/ListingDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/listings" element={<Listings />} />
      <Route path="/listings/:id" element={<ListingDetails />} />
      <Route path="/listings/new" element={<AddNewListing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )  
}

export default Router;
