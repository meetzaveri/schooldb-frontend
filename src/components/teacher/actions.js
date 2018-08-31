export const fetchstudents_actions = {
    FetchStudentRequested: 'teacher/FETCH_STUDENTS_REQUESTED',
    FetchStudentSucceded: 'teacher/FETCH_STUDENTS_SUCCEEDED',
    FetchStudentFailed: 'teacher/FETCH_STUDENTS_FAILED'
}

export const fetch_students_request = (params) => ({type: fetchstudents_actions.FetchStudentRequested, payload: params});
export const fetch_students_success = (data) => ({type: fetchstudents_actions.FetchStudentSucceded, payload: data});
export const fetch_students_failed = (err) => ({type: fetchstudents_actions.FetchStudentFailed, payload: err});