export const getstudentdata_actions = {
  GetStudentDataActionRequest: "student/GET_STUDENT_DATA_REQUESTED",
  GetStudentDataActionSucceeded: "student/GET_STUDENT_DATA_SUCCEEDED",
  GetStudentDataActionFailed: "student/GET_STUDENT_DATA_FAILED"
};

export const getstudentdata_request = params => ({
  type: getstudentdata_actions.GetStudentDataActionRequest,
  payload: params
});
export const getstudentdata_success = data => ({
  type: getstudentdata_actions.GetStudentDataActionSucceeded,
  payload: data
});
export const getstudentdata__failed = err => ({
  type: getstudentdata_actions.GetStudentDataActionFailed,
  payload: err
});
