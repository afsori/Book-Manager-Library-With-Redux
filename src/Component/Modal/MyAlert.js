// import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import swal from "sweetalert";
import {
  Button,
  Card,
  Badge,
  Nav,
  NavLink,
  Jumbotron,
  Container,
  Form,
  Modal
} from "react-bootstrap";
// import SweetAlert from "react-bootstrap-sweetalert";

// class MyAlert extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <SweetAlert success title="Woot!" onConfirm={this.showAlert}>
//           I did it!
//         </SweetAlert> */}
//         <SweetAlert
//           navigate="/"
//           to="/"
//           warning
//           showCancel
//           confirmBtnText="Yes, delete it!"
//           confirmBtnBsStyle="danger"
//           title="Are you sure?"
//           onConfirm={this.deleteFile}
//           onCancel={this.onCancel}
//           focusCancelBtn
//         >
//           You will not be able to recover this imaginary file!
//         </SweetAlert>
//       </div>
//     );
//   }
// }

// export default MyAlert;

import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export default class MyAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }

  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert success title="Woot!" onConfirm={() => this.hideAlert()}>
        Hello world!
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    console.log("Hiding alert...");
    this.setState({
      alert: null
    });
  }

  render() {
    return (
      <div style={{ marginTop: "0px" }} className="inline-block">
        {/* <Nav.Item> */}
        {/* <Nav.Link href="#link" onClick={() => this.deleteThisGoal()}>
          Edit
        </Nav.Link> */}

        <a onClick={() => this.deleteThisGoal()} className="btn btn-danger">
          Delete Goal
        </a>
        {this.state.alert}
        {/* </Nav.Item> */}
      </div>
    );
  }
}
