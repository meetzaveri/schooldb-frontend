import { register_actions } from "./actions";

export const registerreducer = (
  state = {
    payloaddata: [],
    onLoading: false,
    onLoadingFormSubmit: false,
    role: "",
    error: null
  },
  action
) => {
  switch (action.type) {
    case register_actions.RegisterActionRequested:
      state = {
        ...state,
        onLoading: true
      };
      return state;

    case register_actions.RegisterActionSucceded:
      console.log("Action in register request success", action);
      let registerSuccess = action.payload;
      if (registerSuccess) {
        state = {
          ...state,
          payloaddata: registerSuccess,
          onLoading: false
        };

        return state;
      } else {
        state = {
          ...state,
          payloaddata: [],
          onLoading: false
        };
        return state;
      }

    case register_actions.RegisterActionFailed:
      state = {
        ...state,
        payloaddata: [],
        onLoading: false,
        error: action.message ? action.message : "Error in register action"
      };
      console.log("Action in register request fail", action.message);
      return state;

    default:
      state = {
        ...state
      };
      return state;
  }
};
