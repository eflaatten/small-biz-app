import { combineReducers } from "redux";

const user = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.payload];
    case "REMOVE_LISTING":
      return state.filter(listing => listing.id !== action.payload);
    default:
      return state;
  }
}

const mapData = (state = { positions: {}, loading: false, error: null }, action) => {
  switch (action.type) {
    case "FETCH_MAP_DATA_SUCCESS":
      return {
        ...state,
        positions: {
          ...state.positions,
          [action.payload.address]: action.payload.position, // Use address as key
        },
        loading: false,
      };
    case "FETCH_MAP_DATA_ERROR":
      return {
        ...state,
        error: action.payload, // Error message
        loading: false,
      };
    case "FETCH_MAP_DATA_START":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default combineReducers({ user, listings, mapData });