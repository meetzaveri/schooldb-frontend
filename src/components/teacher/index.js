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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Grid>
    </Fragment>
  );
};

export default Teacher;
