import { combineReducers } from "redux";
import { loginreducer } from "../components/login/reducer";
import { registerreducer } from "../components/register/reducer";
import { t_reducer } from "../components/teacher/reducer";

let rootReducer = combineReducers({
  login: loginreducer,
  register: registerreducer,
  state_teacher: t_reducer
});

export default rootReducer;
