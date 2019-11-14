// import React from "react";

import React, { useState, setState, Component } from "react";
import { slide as Menu } from "react-burger-menu";
import {
  Button,
  ModalBody,
  ToolBar,
  ButtonToolbar,
  ModalFooter
} from "react-bootstrap";
import { Modal, Row, Col, Form, Image } from "react-bootstrap";

// import "./Drawers";
import logo from "../assets/Perusahaan.jpg";
import { NavLink, Link } from "react-router-dom";
// import { MyModal } from "./MyModal";
import MyModal from "../Modal/MyModal";
import App from "../../App";
import ModalHeader from "react-bootstrap/ModalHeader";

class Drawers extends Component {
  constructor(props) {
    super(props);
    this.state = { addModalShow: false };
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div>
        <Menu>
          <img src={logo} style={{ width: "10rem" }} rounded></img>
          <Link to="/about">About</Link>
          <a
            href="/home"
            style={{ width: "20px", height: "20px", justifyContent: "center" }}
          >
            Explore
          </a>

          <a href="/Detail" style={{ width: "20px", height: "20px" }}>
            History
          </a>
          <a href="#" varian="white">
            {/* <MyModal /> */}
            {/* <MyModal
              show={this.state.addModalShow}
              onHide={addModalClose}
              // image={image}
              // title={title}
              // description={description}
            /> */}
            Add Book*
          </a>
          <Button
            variant="primary"
            onClick={this.props.showModal}
          >
            Add Data
          </Button>
        </Menu>

        {/* <MyModal show={this.state.addModalShow} onHide={addModalClose} /> */}
        <></>
      </div>
    );
  }
}

export default Drawers;
