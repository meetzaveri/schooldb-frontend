import React, { Component, Fragment } from "react";
import Errorboundary from "../wrappers/errorboundary";
import Login from "../components/login/login";
import { login_request } from "../components/login/actions";
import { API } from "../api/api";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { routes } from "../routes/routes";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: "",
      email: "",
      password: "",
      loginstatus: null,
      showWarning: this.props.loginstatus.error,
      showWarningOnError: false
    };
  }

  componentWillReceiveProps(prevState) {
    if (prevState.loginstatus.loginsuccess) {
      this.props.history.replace(routes[prevState.loginstatus.role]);
    }
  }

  onHandleInput = event => {
    // console.log("event triggered", event);
    const name = event.target.name;
    this.setState({ [name]: event.target.value, showWarning: false });
  };

  onSubmit = () => {
    // console.log("this.state", this.state);
    const { email, password } = this.state;
    this.props.loginAction({ email, password });
  };

  render() {
    const { onHandleInput, onSubmit } = this;
    const { loginstatus } = this.props;
    // console.log("loginstatus", loginstatus);
    const actions = {
      onHandleInput,
      onSubmit
    };
    return (
      <Errorboundary>
        <Fragment>
          <Login
            state={this.state}
            actions={actions}
            loginstatus={loginstatus}
          />
        </Fragment>
      </Errorboundary>
    );
  }
}

LoginContainer.propTypes = {
  loginAction: PropTypes.func,
  loginstatus: PropTypes.object
};

const mapStateToProps = state => ({ loginstatus: state.login });
const mapDispatchToProps = dispatch => {
  return {
    loginAction: data =>
      dispatch(login_request({ url: API.login, method: "POST", data: data }))
  };
};

const LoginContainerConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

export default LoginContainerConnector;
