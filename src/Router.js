import { Routes, Route } from "react-router-dom";

import LoginContainer from "./containers/Login"; 
import ListingsContainer from "./containers/Listings";
import AddNewListing from "./components/AddNewListing";
import ListingDetails from "./components/ListingDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/listings" element={<ListingsContainer />} />
      <Route path="/listings/:id" element={<ListingDetails />} />
      <Route path="/listings/new" element={<AddNewListing />} />
      <Route path="/login" element={<LoginContainer />} />
    </Routes>
  )  
}

export default Router;
