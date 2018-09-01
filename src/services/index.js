import API, { ApiCall } from "../api/api";

let responseObjToBeSend = {
  message: ""
};

let id = 1;
export const fakeApiCall_A = params => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("IN API", params);
      let data = null;

      if (params.method === "GET") {
        /* Dummy Data */
        data = [
          {
            id: "f7rcnlvcgieaul6g446o97",
            deviceInfo: "G7",
            status: "Available",
            timeSlot: "07:00:00",
            teamName: "Arkham",
            startTime: "2018-08-7 18:44",
            endTime: "2018-08-7 19:44",
            description: "None",
            mobileType: "Android"
          }
        ];
      } else if (params.method === "POST") {
        id++;
        params.data.id = id;
        data = [params.data];

        console.log("DATA IN POST", data);
      } else if (params.method === "PUT") {
        data = [params.data];
      }

      responseObjToBeSend = {
        message: "Data Fetched successfully",
        data
      };
      if (data) {
        resolve(responseObjToBeSend);
      } else {
        let error = "Something went wrong";
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      }
    }, 2000);
  });
};

export const RealApiCall = params => {
  return new Promise((resolve, reject) => {
    let data = null;
    if (params.method === "GET") {
      data = [];
    } else if (params.method === "POST") {
      id++;
      params.data.id = id;
      data = [params.data];

      console.log("DATA IN POST", data);
    } else if (params.method === "PUT") {
      data = [params.data];
    }
    ApiCall(params.url, params.method)
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

export const ApiCallForStudentsLists = params => {
  return new Promise((resolve, reject) => {
    let data = null;

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

export const fakeApiCall_Login = params => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("IN FAKE API CALL LOGIN", params);
      let data = null;

      if (params.method === "GET") {
        /* Dummy Data to feed componentes */
        data = {
          login: true,
          error: false
        };
      } else if (params.method === "POST") {
        data = {
          userdata: params.data,
          login: true,
          error: false
        };

        console.log("DATA IN POST", data);
      } else if (params.method === "PUT") {
        data = [params.data];
      }

      responseObjToBeSend = {
        message: "Login successful",
        data
      };
      if (data) {
        resolve(responseObjToBeSend);
      } else {
        let error = "Something went wrong";
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      }
    }, 2000);
  });
};
