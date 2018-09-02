import React, { Fragment } from "react";
import { Redirect } from "react-router";
import { routes } from "../routes/routes";

//Auth Wrapper as part of navigation guard
export const signInMode = (Component, role) => {
  class userMode extends React.Component {
    state = {
      teacherPermissionMode: false,
      studentPermissionMode: false,
      hasApiCalled: false
    };
    componentDidMount() {
      // some API call
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("token not available");
        this.props.history.replace(routes.index);
      }
      setTimeout(() => {
        this.setState({ hasApiCalled: true });
      }, 500);
    }
    render() {
      const roleFromLocalStorage = localStorage.getItem("userrole");
      const { hasApiCalled } = this.state;
      return hasApiCalled ? (
        <Fragment>
          {roleFromLocalStorage === role ? (
            <Component />
          ) : (
            <Redirect
              to={
                routes[
                  roleFromLocalStorage ? roleFromLocalStorage : routes.index
                ]
              }
            />
          )}
        </Fragment>
      ) : (
        <div>Loading ...</div>
      );
    }
  }

  return userMode;
};
