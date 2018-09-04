import React, { Fragment } from "react";
import { base64toblob } from "../../services/downloadscript";

const Student = props => {
  return (
    <Fragment>
      <div>
        <h2> View Marksheet</h2>
      </div>
      {!props.studentdata && (
        <i style={{ fontSize: "24px" }} className="fa fa-spinner fa-spin" />
      )}
      {props.studentdata && (
        <div>
          <iframe
            title="student-marksheet"
            style={{ height: "500px", width: "500px" }}
            src={props.studentdata.resources}
          />
          <div>
            <button onClick={() => base64toblob(props.studentdata.resources)}>
              Download Marksheet as PDF
            </button>
          </div>
        </div>
      )}
      <div />
    </Fragment>
  );
};

export default Student;
