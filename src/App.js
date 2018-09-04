import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes/routes";
import { withAuth as AuthWrapper } from "./wrappers/auth";
import { signInMode as PermissionWrapper } from "./wrappers/signinmode";
import Loadable from "react-loadable";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import Rootreducer from "./store/store";
import mySaga from "./sagas/sagas";
import "./App.css";
import "./components/main.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Rootreducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const Loading = () => <div>Loading ...</div>;

const LoginContainerLoader = Loadable({
  loader: () => import("./containers/LoginContainer"),
  loading: Loading
});

const RegisterContainerLoader = Loadable({
  loader: () => import("./containers/RegisterContainer"),
  loading: Loading
});

const ProfileScreenLoader = Loadable({
  loader: () => import("./containers/ProfileScreen"),
  loading: Loading
});

const StudentContainerLoader = Loadable({
  loader: () => import("./containers/StudentContainer"),
  loading: Loading
});

const TeacherContainerLoader = Loadable({
  loader: () => import("./containers/TeacherContainer"),
  loading: Loading
});

const SendMarksheetContainer = Loadable({
  loader: () => import("./containers/SendMarksheetContainer"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <Switch>
              <Route
                exact
                path={routes.index}
                component={LoginContainerLoader}
              />
              <Route
                exact
                path={routes.register}
                component={RegisterContainerLoader}
              />
              <Route
                exact
                path={routes.teacher}
                component={PermissionWrapper(TeacherContainerLoader, "teacher")}
              />
              <Route
                exact
                path={routes.teacher + routes.sendmarksheet}
                component={SendMarksheetContainer}
              />
              <Route
                exact
                path={routes.student}
                component={PermissionWrapper(StudentContainerLoader, "student")}
              />
              <Route
                exact
                path={routes.profile}
                component={AuthWrapper(ProfileScreenLoader)}
              />
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
