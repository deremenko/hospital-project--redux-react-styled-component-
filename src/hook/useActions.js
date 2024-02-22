import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import user from "../store/action-creators/user";
import reception from "../store/action-creators/reception";

const useActions = () => {
  const dispatch = useDispatch();
  const actionCreators = { ...user, ...reception };
  
  return bindActionCreators(actionCreators, dispatch);
};

export default useActions;