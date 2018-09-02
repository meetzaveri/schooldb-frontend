import { fetchstudents_actions, upload_marksheets } from "./actions";

export const t_reducer = (
  state = {
    studentlist: [],
    onLoading: false,
    onGoingUpload: false,
    error: null,
    uploadError: null
  },
  action
) => {
  switch (action.type) {
    case fetchstudents_actions.FetchStudentRequested:
      state = {
        ...state,
        onLoading: true
      };
      return state;

    case fetchstudents_actions.FetchStudentSucceded:
      console.log("Action in register request success", action);
      let dataFetch = action.payload;
      if (dataFetch) {
        state = {
          ...state,
          studentlist: dataFetch,
          onLoading: false,
          fetchstatus: true
        };

        return state;
      } else {
        state = {
          ...state,
          studentlist: [],
          onLoading: false
        };
        return state;
      }

    case fetchstudents_actions.FetchStudentFailed:
      state = {
        ...state,
        studentlist: [],
        onLoading: false,
        error: action.message
      };
      console.log("Request fail : ", action.message);
      return state;

    case upload_marksheets.UploadMarksheetRequested:
      state = {
        ...state,
        onLoading: true,
        onGoingUpload: true
      };
      return state;

    case upload_marksheets.UploadMarksheetSucceded:
      console.log("Upload marksheet success", action);
      state = {
        ...state,
        onLoading: true,
        onGoingUpload: false
      };
      return state;

    case upload_marksheets.UploadMarksheetFailed:
      state = {
        ...state,
        onLoading: true,
        onGoingUpload: false,
        uploadError: action.message
      };
      return state;

    default:
      state = {
        ...state
      };
      return state;
  }
};
