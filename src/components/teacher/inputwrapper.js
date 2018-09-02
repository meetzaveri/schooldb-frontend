import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "#"
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log("this.fileInput", this.fileInput);
    var file = this.fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      const s = e.target.result;
      localStorage.setItem("src", s);
    };
    var src = localStorage.getItem("src");
    // console.log("SRC", src);
    reader.readAsDataURL(file);
    this.setState({ src: src }, () => {
      // console.log("STATE", this.state);
    });
    this.props.onPostSubmitAction(src);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            disabled={this.props.disable}
            accept="application/pdf"
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
        </label>
        <br />
        <button disabled={this.props.disable} type="submit">
          Submit <i className="fa fa-spinner fa-spin" />
        </button>
      </form>
    );
  }
}

export default FileInput;
