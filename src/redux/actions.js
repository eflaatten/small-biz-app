
export const setLoggedIn = (isLoggedIn) => {
  return {
    type: "SET_LOGGED_IN",
    payload: isLoggedIn,
  }
}

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: null,
  }
}

export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    payload: listing,
  }
}

export const removeListing = (listingId) => {
  return {
    type: "REMOVE_LISTING",
    payload: listingId,
  }
}

