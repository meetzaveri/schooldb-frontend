export const fetchstudents_actions = {
  FetchStudentRequested: "teacher/FETCH_STUDENTS_REQUESTED",
  FetchStudentSucceded: "teacher/FETCH_STUDENTS_SUCCEEDED",
  FetchStudentFailed: "teacher/FETCH_STUDENTS_FAILED"
};

export const fetch_students_request = params => ({
  type: fetchstudents_actions.FetchStudentRequested,
  payload: params
});
export const fetch_students_success = data => ({
  type: fetchstudents_actions.FetchStudentSucceded,
  payload: data
});
export const fetch_students_failed = err => ({
  type: fetchstudents_actions.FetchStudentFailed,
  payload: err
});

export const upload_marksheets = {
  UploadMarksheetRequested: "teacher/UPLOAD_MARKSHEETS_REQUESTED",
  UploadMarksheetSucceeded: "teacher/UPLOAD_MARKSHEETS_SUCCEEDED",
  UploadMarksheetFailed: "teacher/UPLOAD_MARKSHEETS_FAILED"
};

export const upload_marksheets_request = params => ({
  type: upload_marksheets.UploadMarksheetRequested,
  payload: params
});

export const upload_marksheets_success = data => ({
  type: upload_marksheets.UploadMarksheetSucceded,
  payload: data
});

export const upload_marksheets_failed = err => ({
  type: upload_marksheets.UploadMarksheetFailed,
  payload: err
});
