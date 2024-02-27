import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import AllActionCreators from '../store/action-creators/index.js';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActionCreators, dispatch);
};

export default useActions;