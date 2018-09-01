import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Checkbox,
  ControlLabel,
  Button,
  HelpBlock,
  Radio
} from "react-bootstrap";
import PropTypes from "prop-types";
import { routes } from "../../routes/routes";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} /> {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
const Register = ({ state, actions }) => {
  const styles = {
    // "font-size": "24px"
    marginLeft: "12px"
  };
  return (
    <Fragment>
      <Grid>
        <Row className="show-grid">
          <h2>Register</h2>
          <form
            className=""
            onSubmit={e => {
              e.preventDefault();
              actions.onSubmitRegistration(e);
            }}
          >
            <label>Name</label>
            <input
              id="formControlsName"
              className="form-control custom-form-register"
              style={{
                padding: "10px"
              }}
              required
              name="name"
              value={state.name}
              onChange={e => actions.onHandleInputForRegistration(e)}
              label="Name"
              type="text"
              placeholder="Enter Name"
            />

            <label>Email Address</label>
            <input
              style={{
                padding: "10px"
              }}
              id="formControlsEmail"
              className="form-control custom-form-register"
              required
              name="email"
              value={state.email}
              onChange={e => actions.onHandleInputForRegistration(e)}
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <label>Password</label>
            <input
              style={{
                padding: "10px"
              }}
              id="formControlsPassword"
              className="form-control custom-form-register"
              required
              name="password"
              value={state.password}
              onChange={e => actions.onHandleInputForRegistration(e)}
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <FormGroup>
              <Radio
                name="radiostudent"
                checked={state.radiostudent}
                onChange={e => actions.onHandleSelectRole(e)}
              >
                Student
              </Radio>{" "}
              <Radio
                name="radioteacher"
                checked={state.radioteacher}
                onChange={e => actions.onHandleSelectRole(e)}
              >
                Teacher
              </Radio>{" "}
            </FormGroup>
            {state.radioteacher ? null : (
              <Fragment>
                {" "}
                <label>Roll Number</label>
                <input
                  style={{
                    padding: "10px"
                  }}
                  id="formControlsRoll"
                  className="form-control custom-form-register"
                  required
                  name="roll_no"
                  value={state.roll_no}
                  onChange={e => actions.onHandleInputForRegistration(e)}
                  type="number"
                  label="Roll number"
                  placeholder="Enter roll number"
                />
              </Fragment>
            )}

            <Button type="submit">Register</Button>
          </form>
          <Link to={routes.login}>
            <h3>Back to Login</h3>
          </Link>
        </Row>
      </Grid>
      ;
    </Fragment>
  );
};

Register.propTypes = {
  state: PropTypes.object,
  actions: PropTypes.object
};

export default Register;
