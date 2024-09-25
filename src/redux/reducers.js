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

export default combineReducers({ user, listings });