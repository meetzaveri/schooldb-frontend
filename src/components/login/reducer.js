import { login_actions as lg_a } from "./actions";

export const loginreducer = (
  state = {
    data: [],
    onLoading: false,
    onLoadingFormSubmit: false,
    role: "",
    error: null
  },
  action
) => {
  switch (action.type) {
    case lg_a.LoginActionRequested:
      state = {
        ...state,
        onLoading: true
      };
      return state;

    case lg_a.LoginActionSucceded:
      console.log("Action in login request success", action);
      let loginOnSuccess = action.payload;
      if (loginOnSuccess) {
        localStorage.setItem("token", loginOnSuccess.data.token);
        localStorage.setItem("userrole", loginOnSuccess.data.role);
        state = {
          ...state,
          data: loginOnSuccess,
          onLoading: false,
          loginsuccess: true,
          role: loginOnSuccess.data.role
        };

        return state;
      } else {
        state = {
          ...state,
          data: [],
          onLoading: false
        };
        return state;
      }

    case lg_a.LoginActionFailed:
      state = {
        ...state,
        data: [],
        onLoading: false,
        error: action.message ? action.message : "Error in login action"
      };
      console.log("Action in login request fail", action);
      return state;

    default:
      state = {
        ...state
      };
      return state;
  }
};
