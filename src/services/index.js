import { ApiCall } from "../api/api";

let responseObjToBeSend = {
  message: ""
};

export const ApiCallForRegistration = params => {
  return new Promise((resolve, reject) => {
    let data = params.data;
    ApiCall(params.url, params.method, data)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "User registered successfully",
          data: responseJson
        };
        console.log("responseJson", responseJson);
        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};

export const ApiCallForLogin = params => {
  return new Promise((resolve, reject) => {
    let data = params.data;
    ApiCall(params.url, params.method, data)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "User logged in successfully",
          data: responseJson
        };

        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};

export const ApiCallForUploadMarksheets = params => {
  return new Promise((resolve, reject) => {
    ApiCall(params.url, params.method, params.data, params.header)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "Marksheet uploaded successfully",
          data: responseJson
        };

        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};

export const ApiCallForStudentsLists = params => {
  return new Promise((resolve, reject) => {
    ApiCall(params.url, params.method, params.data, params.header)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "Data Fetched successfully",
          data: responseJson
        };

        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};

export const ApiCallForStudentData = params => {
  return new Promise((resolve, reject) => {
    ApiCall(params.url, params.method, params.data, params.header)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "Student Data Fetched successfully",
          data: responseJson
        };

        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};
