import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  ApiCallForStudentsLists,
  ApiCallForUploadMarksheets,
  ApiCallForLogin,
  ApiCallForRegistration,
  ApiCallForStudentData
} from "../services/index";
import { login_actions } from "../components/login/actions";
import { register_actions } from "../components/register/actions";
import {
  fetchstudents_actions,
  upload_marksheets
} from "../components/teacher/actions";
import { getstudentdata_actions } from "../components/student/actions";

// worker Saga: will be fired on event of actions
function* LoginSaga(action) {
  try {
    console.log("Saga in use for login operation");
    const login = yield call(ApiCallForLogin, action.payload);
    console.log("Login", login);
    yield put({ type: login_actions.LoginActionSucceded, payload: login });
  } catch (e) {
    console.log("Into catch block", e);
    yield put({ type: login_actions.LoginActionFailed, message: e.message });
  }
}

function* RegisterSaga(action) {
  try {
    console.log("Saga in use for register operation");
    const register = yield call(ApiCallForRegistration, action.payload);
    console.log("Register", register);
    yield put({
      type: register_actions.RegisterActionSucceded,
      payload: register
    });
  } catch (e) {
    console.log("Into catch block");
    yield put({
      type: register_actions.RegisterActionFailed,
      message: e.message
    });
  }
}

function* GetStudentLists(action) {
  try {
    console.log("Saga in use for fetch user lists operation");
    const userlists = yield call(ApiCallForStudentsLists, action.payload);
    console.log("userlists", userlists);
    yield put({
      type: fetchstudents_actions.FetchStudentSucceded,
      payload: userlists
    });
  } catch (e) {
    console.log("Into catch block");
    yield put({
      type: fetchstudents_actions.FetchStudentFailed,
      message: e.message
    });
  }
}

function* UploadMarksheet(action) {
  try {
    console.log("Saga in use for upload marksheet operation");
    const uploadmarksheet = yield call(
      ApiCallForUploadMarksheets,
      action.payload
    );
    console.log("uploadmarksheet", uploadmarksheet);
    yield put({
      type: upload_marksheets.UploadMarksheetSucceeded,
      payload: uploadmarksheet
    });
  } catch (e) {
    console.log("Into catch block");
    yield put({
      type: upload_marksheets.UploadMarksheetFailed,
      message: e.message
    });
  }
}

function* GetStudentData(action) {
  try {
    console.log("Saga in use for fetch specifc student data operation");
    const studentdata = yield call(ApiCallForStudentData, action.payload);
    console.log("studentdata", studentdata);
    yield put({
      type: getstudentdata_actions.GetStudentDataActionSucceeded,
      payload: studentdata
    });
  } catch (e) {
    console.log("Into catch block");
    yield put({
      type: getstudentdata_actions.GetStudentDataActionFailed,
      message: e.message
    });
  }
}

/*
    Alternatively you may use takeLatest.

    Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
    dispatched while a fetch is already pending, that pending fetch is cancelled
    and only the latest one will be run.
  */
function* mySaga() {
  console.log("Calling main saga");
  yield takeLatest(login_actions.LoginActionRequested, LoginSaga);
  yield takeLatest(register_actions.RegisterActionRequested, RegisterSaga);
  yield takeLatest(
    fetchstudents_actions.FetchStudentRequested,
    GetStudentLists
  );
  yield takeLatest(upload_marksheets.UploadMarksheetRequested, UploadMarksheet);
  yield takeLatest(
    getstudentdata_actions.GetStudentDataActionRequest,
    GetStudentData
  );
}

export default mySaga;
