import React, { Fragment } from "react";
import { Grid, Col, Nav, NavItem, Table } from "react-bootstrap";

const ListRender = props => {
  console.log("props.lists", props.lists);
  const lists = props.lists ? props.lists : [];
  const render = lists.map((item, index) => (
    <tr key={index}>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.roll_no}</td>
    </tr>
  ));
  return render;
};

const Teacher = props => {
  return (
    <Fragment>
      <Grid>
        <h3>Student Details</h3>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll no.</th>
            </tr>
          </thead>
          <tbody>
            <ListRender {...props} />
          </tbody>
        </Table>
      </Grid>
    </Fragment>
  );
};

export default Teacher;
