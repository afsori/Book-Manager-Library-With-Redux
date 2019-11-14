import React, { Component, props, useState } from "react";
import { Modal, Button, Row, Col, Nav, Form, FormGroup } from "react-bootstrap";

import Axios from "axios";

import { Input, Label } from "reactstrap";

// import { connect } from "react-redux"; //higher order component (HOC)

// import { postLibrary } from "../../Public/Redux/Actions/library";
// import App from "../../App";

class ModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      library_id: "",
      image: "",
      title: "",
      description: ""
      // addModalShow: false,
      // show: false
    };
  }

  addModalClose = () => this.setState({ addModalShow: false });
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Form Edit Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.onSubmit}>
              <FormGroup>
                <Label for="imageurl">Image Url</Label>
                <Input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="image url"
                  value={this.props.image}
                  onChange={this.props.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={this.props.title}
                  onChange={this.props.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  value={this.props.description}
                  onChange={this.props.onChange}
                ></Input>
              </FormGroup>
              <Modal.Footer>
                <Button
                  type="submit"
                  // onClick={this.props.onHide}
                >
                  Edit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button type="submit" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}

export default ModalEdit;
