import React, {Fragment} from 'react';
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
} from 'react-bootstrap'
// import {Checkbox} from 'react-icheck';
import {routes} from '../routes/routes';
import {Link} from 'react-router-dom';

function FieldGroup({
  id,
  label,
  help,
  ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
const Login = props => {
  const styles = {
    // "font-size": "24px"
    "marginLeft": "12px"
  }
  return (
    <Fragment>

      <Grid>
        <Row className="show-grid">
          <h2>Login
          </h2>
          <form>
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"/>
            <FieldGroup id="formControlsPassword" label="Password" type="password"/>

            <Button type="submit">Submit</Button>
          </form>
        </Row>
      </Grid>;
    </Fragment>
  );
};

export default Login;
