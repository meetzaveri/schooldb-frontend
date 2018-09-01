export const API = {
  login: "http://localhost:8000/login",
  register: "http://localhost:8000/register",
  getStudents: "http://localhost:8000/studentslist"
};

export function ApiCall(apiName, methodType, data, header) {
  let customResponseFlag = false;
  const options = {
    method: methodType,
    headers: header || {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  if (methodType === "GET") {
    delete options.body;
  }
  return new Promise((resolve, reject) => {
    fetch(apiName, options)
      .then(response => {
        if (response.status === 401) {
          reject("Unauthorized");
          return;
        } else if (response.status === 404) {
          reject("User not found");
        } else if (response.status === 500) {
          customResponseFlag = true;
          reject(response);
        }
        return response.json();
      })
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject(error);
      });
  });
}
