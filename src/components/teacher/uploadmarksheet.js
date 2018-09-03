import React, { Fragment, Component } from "react";
import { DropdownButton, MenuItem, ButtonToolbar } from "react-bootstrap";
import Loadable from "react-loadable";
import PropTypes from "prop-types";

const RenderDropdownButton = props => {
  console.log("props.listsForDropdown", props.listsForDropdown);
  const lists = props.listsForDropdown ? props.listsForDropdown : [];
  const renderDropdwn = lists.map((item, index) => (
    <MenuItem
      key={index}
      eventKey={index}
      onSelect={() =>
        props.onSelectDropdownItem(
          item._id,
          item.name,
          item.email,
          item.profile_id
        )
      }
    >
      {`${item.name} (${item.email})`}
    </MenuItem>
  ));
  return renderDropdwn;
};

RenderDropdownButton.propTypes = {
  listsForDropdown: PropTypes.array
};

const Loading = () => <div>Loading ...</div>;

const InputWrapperLoader = Loadable({
  loader: () => import("./inputwrapper"),
  loading: Loading
});

class UploadMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blobData: null,
      disableFileInput: true,
      selectedUserName: null,
      selectedUserEmail: null
    };
  }
  onPostSubmit = src => {
    const blobDataFromLS = localStorage.getItem("src");
    // console.log("src on postsubmit", blobDataFromLS);
    this.props.onSubmitMarksheet(blobDataFromLS);
  };
  onSelectDropdownItem = (id, name, email, profile_id) => {
    console.log("on select dropdown", id);
    this.setState({
      disableFileInput: false,
      selectedUserName: name,
      selectedUserEmail: email
    });
    localStorage.setItem("userid_forupload", id);
    localStorage.setItem("profileId_forupload", profile_id);
  };
  render() {
    const { onPostSubmit, onSelectDropdownItem } = this;
    const {
      disableFileInput,
      selectedUserName,
      selectedUserEmail
    } = this.state;
    return (
      <Fragment>
        <h2>Send marksheets</h2>
        <h4>Select Student to send marksheet</h4>
        <ButtonToolbar>
          <DropdownButton
            bsStyle="primary"
            title="Choose Student"
            id="fwei9"
            key={1}
          >
            <RenderDropdownButton
              {...this.props}
              onSelectDropdownItem={onSelectDropdownItem}
            />
          </DropdownButton>
        </ButtonToolbar>

        <div style={{ padding: "40px 20px" }} />

        {!disableFileInput && (
          <div>
            <h4>Name : {selectedUserName} </h4>
            <h4>Email : {selectedUserEmail} </h4>
            <div style={{ padding: "10px 10px" }} />
            <h4>
              {" "}
              After selecting student, select appropriate file(marksheet in pdf
              format)
            </h4>
            <InputWrapperLoader
              disable={disableFileInput}
              onPostSubmitAction={onPostSubmit}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

UploadMarksheet.propTypes = {
  onSubmitMarksheet: PropTypes.func
};

export default UploadMarksheet;
