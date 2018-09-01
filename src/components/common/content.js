import React, { Fragment } from "react";
import "../main.css";
import { Col } from "react-bootstrap";

const Content = props => {
  return (
    <Fragment>
      <Col id="main_content" xs={9} md={8} sm={8} lg={10}>
        {props.children}
      </Col>
    </Fragment>
  );
};

export default Content;
