import React, { Component, Fragment } from "react";
import UploadMarksheet from "../components/teacher/uploadmarksheet";
import Errorboundary from "../wrappers/errorboundary";
import Sidebar from "../components/common/sidebar";
import Content from "../components/common/content";
import { routes } from "../routes/routes";
import { API } from "../api/api";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetch_students_request } from "../components/teacher/actions";

class SendMarksheetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchStudentData();
  }
  onSubmitMarksheet = src => {
    console.log("src in onsubmitmarksheet", src);
  };
  render() {
    const { teacher } = this.props;
    const { onSubmitMarksheet } = this;
    return (
      <Errorboundary>
        <Fragment>
          <Sidebar
            selecedPane={3}
            routeToMap={routes.teacher}
            secondaryRoute={routes.teacher + routes.sendmarksheet}
          />
          <Content>
            <UploadMarksheet
              onSubmitMarksheet={onSubmitMarksheet}
              listsForDropdown={teacher.studentlist.data}
            />
          </Content>
        </Fragment>
      </Errorboundary>
    );
  }
}

SendMarksheetContainer.propTypes = {
  fetchStudentData: PropTypes.func,
  teacher: PropTypes.object
};
const mapStateToProps = state => ({ teacher: state.state_teacher });
const mapDispatchToProps = dispatch => {
  const token = localStorage.getItem("token");
  return {
    fetchStudentData: () =>
      dispatch(
        fetch_students_request({
          url: API.getStudents,
          method: "GET",
          data: {},
          header: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
          }
        })
      )
  };
};

const SendMarksheetContainerConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMarksheetContainer);

export default SendMarksheetContainerConnector;