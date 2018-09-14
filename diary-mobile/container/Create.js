import { connect } from "react-redux";
import { actionCreators } from "../reducer";
import CreateScreen from "../component/HomeScreen";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  const { diaries } = state;
  return { diaries };
};

const mapDispatchToProps = dispatch => {
  return {
    createDiary: bindActionCreators(actionCreators.addDiary, dispatch),
    editDiary: bindActionCreators(actionCreators.editDiary, dispatch),
    removeDiary: bindActionCreators(actionCreators.removeDiary, dispatch)
  };
};

const Create = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateScreen);

export default Create;
