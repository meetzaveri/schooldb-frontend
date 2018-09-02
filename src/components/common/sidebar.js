import React, { Fragment } from "react";
import "../main.css";
import { Col, Nav, NavItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { routes } from "../../routes/routes";

const Sidebar = ({ selecedPane, routeToMap, secondaryRoute }) => {
  return (
    <Fragment>
      <Col
        id="main_sidebar"
        xs={3}
        md={4}
        sm={4}
        lg={2}
        style={{
          padding: "0px"
        }}
      >
        <Nav
          className="nav_box"
          bsStyle="pills"
          stacked
          activeKey={selecedPane}
        >
          <NavItem
            eventKey={1}
            href={routeToMap}
            style={{
              border: "0px"
            }}
          >
            Home
          </NavItem>
          <NavItem eventKey={2} href="/profile" title="Item">
            Profile
          </NavItem>
          <NavItem eventKey={3} href={secondaryRoute} title="Item">
            Resources
          </NavItem>
          <NavItem
            eventKey={4}
            href={routes.index}
            onClick={e => {
              localStorage.removeItem("token");
              localStorage.removeItem("userrole");
            }}
            title="Item"
          >
            Sign Out
          </NavItem>
        </Nav>
      </Col>
    </Fragment>
  );
};

Sidebar.propTypes = {
  selecedPane: PropTypes.number,
  routeToMap: PropTypes.string
};

export default Sidebar;
