import React, {Component, Fragment} from 'react';
import Login from '../pages/login'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: ''
    }
  }
  render() {
    return (
      <div>
        <Login state={this.state}/>
      </div>
    );
  }
}

export default LoginContainer;