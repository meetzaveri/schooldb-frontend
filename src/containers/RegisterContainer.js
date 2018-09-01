import React, { Component, Fragment } from "react";
import Register from "../components/register/register";
import { API } from "../api/api";
import { connect } from "react-redux";
import { register_request } from "../components/register/actions";
import PropTypes from "prop-types";
import { routes } from "../routes/routes";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: "",
      name: "",
      roll_no: "",
      email: "",
      password: "",
      radiostudent: true,
      radioteacher: false,
      register: null
    };
  }

  onHandleInputForRegistration = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  onHandleSelectRole = event => {
    const name = event.target.name;
    switch (name) {
      case "radiostudent":
        this.setState({ radiostudent: true, radioteacher: false });
        break;
      case "radioteacher":
        this.setState({ radiostudent: false, radioteacher: true });
        break;
      default:
        this.setState({ radiostudent: true, radioteacher: false });
        break;
    }
  };

  componentWillReceiveProps(prevState) {
    if (!prevState.register.onLoading && !prevState.register.error) {
      this.props.history.replace(routes.index);
    }
  }

  onSubmitRegistration = () => {
    console.log("Submit form", this.state);

    const {
      name,
      roll_no,
      email,
      password,
      radiostudent,
      radioteacher
    } = this.state;
    const role = radioteacher ? "teacher" : "student";
    this.props.registerUser({
      name,
      roll_no: role === "teacher" ? null : roll_no,
      email,
      password,
      role
    });
  };

  render() {
    const {
      onHandleInputForRegistration,
      onSubmitRegistration,
      onHandleSelectRole
    } = this;
    const actions = {
      onHandleInputForRegistration,
      onSubmitRegistration,
      onHandleSelectRole
    };
    return (
      <div>
        <Register state={this.state} actions={actions} />
      </div>
    );
  }
}

RegisterContainer.propTypes = {
  registerUser: PropTypes.func
};

const mapStateToProps = state => ({ register: state.register });
const mapDispatchToProps = dispatch => {
  return {
    registerUser: data =>
      dispatch(
        register_request({ method: "POST", url: API.register, data: data })
      )
  };
};

const RegisterContainerConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);

export default RegisterContainerConnector;
