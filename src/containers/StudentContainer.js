import React, { Component } from "react";
import Errorboundary from "../wrappers/errorboundary";
import Sidebar from "../components/common/sidebar";
import Content from "../components/common/content";
import StudentComponent from "../components/student";
import { routes } from "../routes/routes";
import { API } from "../api/api";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getstudentdata_request } from "../components/student/actions";

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchStudentData();
  }
  render() {
    console.log("this.props.student", this.props.student);
    const { student } = this.props;
    return (
      <Errorboundary>
        <Sidebar selecedPane={1} routeToMap={routes.student}>
          Sidebar
        </Sidebar>
        <Content>
          <StudentComponent studentdata={student.data.data} />
        </Content>
      </Errorboundary>
    );
  }
}

StudentContainer.propTypes = {
  fetchStudentData: PropTypes.func,
  student: PropTypes.object
};

const mapStateToProps = state => ({ student: state.student });
const mapDispatchToProps = dispatch => {
  const token = localStorage.getItem("token");
  return {
    fetchStudentData: () =>
      dispatch(
        getstudentdata_request({
          url: API.getStudentData,
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

const StudentContainerConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentContainer);

export default StudentContainerConnector;
