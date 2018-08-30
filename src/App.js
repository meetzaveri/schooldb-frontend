import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {routes} from "./routes/routes";
import StudentContainer from './containers/StudentContainer'
import TeacherContainer from './containers/TeacherContainer';
import LoginContainer from './containers/LoginContainer';
import ProfileScreen from './containers/ProfileScreen';
import ResourceContainer from './containers/ResourceContainer';
import {withAuth as AuthWrapper} from './wrappers/auth';
import {signInMode as PermissionWrapper} from './wrappers/signinmode';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path={routes.index} component={LoginContainer}/>
            <Route
              exact
              path={routes.teacher}
              component={PermissionWrapper(TeacherContainer, 'teacher')}/>
            <Route
              exact
              path={routes.student}
              component={PermissionWrapper(StudentContainer, 'student')}/>
            <Route
              exact
              path={routes.resources}
              component={AuthWrapper(ResourceContainer)}/>
            <Route exact path={routes.profile} component={AuthWrapper(ProfileScreen)}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
