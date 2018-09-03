import { getstudentdata_actions } from "./actions";

export const student_reducer = (
  state = {
    data: [],
    onLoading: false,
    role: "",
    error: null,
    fetchStatus: false
  },
  action
) => {
  switch (action.type) {
    case getstudentdata_actions.GetStudentDataActionRequest:
      state = {
        ...state,
        onLoading: true
      };
      return state;

    case getstudentdata_actions.GetStudentDataActionSucceeded:
      let studentdata = action.payload;
      if (studentdata) {
        state = {
          ...state,
          data: studentdata,
          onLoading: false,
          fetchStatus: true
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

    case getstudentdata_actions.GetStudentDataActionFailed:
      state = {
        ...state,
        data: [],
        onLoading: false,
        error: action.message
          ? action.message
          : "Error in fetching student data"
      };
      console.log("Action in fetch student data request fail", action);
      return state;

    default:
      state = {
        ...state
      };
      return state;
  }
};
