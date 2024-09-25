import { connect } from "react-redux";

import Login from "../components/Login";
import { setLoggedIn } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: (isLoggedIn) => dispatch(setLoggedIn(isLoggedIn)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);