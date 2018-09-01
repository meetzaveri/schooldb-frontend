import React, { Component } from "react";
import Errorboundary from "../wrappers/errorboundary";
import Sidebar from "../components/common/sidebar";
import Content from "../components/common/content";
import TeacherComponent from "../components/teacher";
import { routes } from "../routes/routes";
import { API } from "../api/api";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetch_students_request } from "../components/teacher/actions";

class TeacherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchStudentData();
  }
  render() {
    const { teacher } = this.props;

    return (
      <Errorboundary>
        <Sidebar selecedPane={1} routeToMap={routes.teacher}>
          Sidebar
        </Sidebar>
        <Content>
          <TeacherComponent lists={teacher.studentlist.data} />
        </Content>
      </Errorboundary>
    );
  }
}

TeacherContainer.propTypes = {
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

const TeacherContainerConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherContainer);

export default TeacherContainerConnector;
