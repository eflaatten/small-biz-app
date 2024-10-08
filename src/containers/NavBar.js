import { connect } from "react-redux";

import NavBar from "../components/NavBar";
import { logout } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);