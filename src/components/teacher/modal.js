import React, { Fragment, Component } from "react";
import {
  Grid,
  Col,
  Modal,
  Popover,
  Button,
  Tooltip,
  OverlayTrigger,
  Nav,
  NavItem,
  Table
} from "react-bootstrap";

class ModalComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    const { showModal, showModalRecord } = this.props.state;
    const { handleCloseModal } = this.props;
    return (
      <Fragment>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Marksheet preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Student Name - {showModalRecord.name}</h4>
            <p />

            <iframe
              style={{ height: "500px", width: "100%" }}
              src={showModalRecord.resources}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalComponent;
