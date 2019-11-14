import React, { Component, props, useState } from "react";
import {
  Modal,
  Button,
  ButtonToolbar,
  Row,
  Col,
  Form,
  InputGroup,
  FormGroup
  // Input
} from "react-bootstrap";
import Axios from "axios";

import { Input, Label } from "reactstrap";

// import { connect } from "react-redux"; //higher order component (HOC)

// import { postLibrary } from "../../Public/Redux/Actions/library";
// import App from "../../App";

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      library_id: "",
      image: "",
      title: "",
      description: ""
      // newBook: {
      //   image: "",
      //   title: "",
      //   description: ""
      // }
    };
  }
  addModalClose = () => this.setState({ addModalShow: false });

  // const = ({ image, title, description } = this.props);

  // onSubmit(e) {
  //   e.preventDefault();

  //   const newData = {
  //     image: this.image.value,
  //     title: this.title.value,
  //     description: this.description.value
  //   };

  //   function addData(newData) {
  //     Axios.request({
  //       method: "post",
  //       url: "http://localhost:7000/library/insert",
  //       data: newData
  //     })
  //       .then(response => {
  //         this.props.history.push("/");
  //       })
  //       .catch(err => console.log(err));
  //   }
  //   addData(newData);
  // }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.dispatch({
  //     type: "POST_LIBRARY",
  //     book: this.state
  //   });
  //   this.props.history.push("/");
  // };

  render() {
    // console.log("render", this.state);

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
              Add Data
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* onSubmit={onSubmit} */}
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
              <Button
                type="submit"
                variant="warning"
                // onClick={() => this.setState({ addModalShow: true })}
              >
                Add Data
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            {/* onClick={this.props.onHide} */}
            {/* <ButtonToolbar> */}
            {/* <Button
              variant="primary"
              onClick={() => this.setState({ addModalShow: true })}
              show={this.state.addModalShow}
              onHide={this.addModalClose.bind(this)}
            >
              Add Data
            </Button> */}
            {/* </ButtonToolbar> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// export default connect(mapStateToProps)(MyModal);
export default MyModal;
// function MyModal() {

// const MyModal = props => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const {
//     title,
//     author,
//     image_url,
//     date,
//     year,
//     description,
//     status,
//     genre,
//     onChange,
//     onSubmit,
//     modalId,
//     modalTitle
//   } = props;
//   // render();
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Add Book
//       </Button>
//       {/* <Button variant="primary" onClick={handleShow}></Button> */}
//       {/* <a variant="primary" onClick={handleShow}></a> */}

//       <Modal
//         show={show}
//         onHide={handleClose}
//         animation={false}
//         id={modalId}
//         className="modal"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add Data</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form className="myForm">
//             <Form.Group
//               controlId="formBasicEmail"
//               type="form"
//               placeholder="Url"
//               name="image_url"
//               id="image_url"
//               type="text"
//               className="validate"
//               placeholder="Image URL"
//               value={image_url}
//               onChange={onChange}
//             >
//               <Form.Label>Url Image</Form.Label>
//               <Form.Control />
//             </Form.Group>
//             <Form.Group
//               controlId="formBasicEmail"
//               type="form"
//               placeholder="Title"
//               name="title"
//               id="title"
//               type="text"
//               className="validate"
//               placeholder="Title"
//               value={title}
//               onChange={onChange}
//             >
//               <Form.Label>Title</Form.Label>
//               <Form.Control />
//             </Form.Group>
//             <Form.Group
//               controlId="formBasicEmail"
//               type="form"
//               placeholder="Description"
//               name="description"
//               id="description"
//               type="text"
//               className=""
//               placeholder="Description"
//               value={description}
//               onChange={onChange}
//             >
//               <Form.Label>Description</Form.Label>
//               <Form.Control />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleClose} type="submit">
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default MyModal;
