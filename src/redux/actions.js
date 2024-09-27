export const FETCH_MAP_DATA_SUCCESS = "FETCH_MAP_DATA_SUCCESS";
export const FETCH_MAP_DATA_ERROR = "FETCH_MAP_DATA_ERROR";

// Action to fetch coordinates using Google Maps Geocoding API
export const fetchMapData = (address) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_MAP_DATA_START" });
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
      const data = await response.json();
      if (data.status === "OK") {
        const location = data.results[0].geometry.location;
        dispatch({
          type: FETCH_MAP_DATA_SUCCESS,
          payload: {
            address, 
            position: {
              lat: location.lat,
              lng: location.lng,
            },
          },
        });
      } else {
        throw new Error("No results found");
      }
    } catch (error) {
      dispatch({
        type: FETCH_MAP_DATA_ERROR,
        payload: error.message,
      });
    }
  };
};

export const setLoggedIn = (isLoggedIn) => {
  return {
    type: "SET_LOGGED_IN",
    payload: isLoggedIn,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: null,
  };
};

export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    payload: listing,
  };
};

export const removeListing = (listingId) => {
  return {
    type: "REMOVE_LISTING",
    payload: listingId,
  };
};
