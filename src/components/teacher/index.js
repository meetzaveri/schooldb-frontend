import React, { Fragment, Component } from "react";
import { Grid, Col, Nav, NavItem, Table } from "react-bootstrap";
import ModalBox from "./modal";

const ListRender = props => {
  console.log("props.lists", props.lists);
  const lists = props.lists ? props.lists : [];
  const render = lists.map((item, index) => (
    <tr key={index}>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.roll_no}</td>
      <td>
        <button onClick={() => props.handleOnClickModal(item)}>
          View marksheet
        </button>
      </td>
    </tr>
  ));
  return render;
};

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, showModalRecord: {} };
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleShowModal = record => {
    console.log("record on modal", record);
    this.setState({ showModal: true, showModalRecord: record });
  };
  render() {
    const { handleShowModal, handleCloseModal } = this;
    return (
      <Fragment>
        {" "}
        <Grid>
          <h3>Student Details</h3>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Sr no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll no.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <ListRender
                {...this.props}
                handleOnClickModal={handleShowModal}
              />
              <ModalBox
                state={this.state}
                handleCloseModal={handleCloseModal}
              />
            </tbody>
          </Table>
        </Grid>
      </Fragment>
    );
  }
}

export default Teacher;
