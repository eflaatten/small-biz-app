import { connect } from "react-redux";

import Listings from '../components/Listings';
import { addListing, removeListing } from '../redux/actions';

const mapStateToProps = (state) => {
  return { listings: state.listings, isLoggedIn: state.user.isLoggedIn }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    addListing: (listing) => dispatch(addListing(listing)),
    removeListing: (listingId) => {
      dispatch(removeListing(listingId));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);