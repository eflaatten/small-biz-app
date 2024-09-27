import { connect } from "react-redux";
import Map from "../components/Map";
import { fetchMapData } from "../redux/actions";

const mapStateToProps = (state, ownProps) => {
  const { filterId } = ownProps;
  return {
    listings: state.listings,
    positions: state.mapData.positions || {},
    filterId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMapData: (address) => dispatch(fetchMapData(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
