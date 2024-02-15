import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { registration } from "../store/action-creators/user";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(registration, dispatch);
};

export default useActions;