import React, { Component } from "react";
import Errorboundary from "../wrappers/errorboundary";
import Sidebar from "../components/common/sidebar";
import Content from "../components/common/content";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const role = localStorage.getItem("userrole");
    return (
      <Errorboundary>
        <Sidebar selecedPane={2} routeToMap={role}>
          Sidebar
        </Sidebar>
        <Content>Profile Screen</Content>
      </Errorboundary>
    );
  }
}

export default ProfileScreen;
