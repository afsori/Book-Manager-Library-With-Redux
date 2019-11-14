import React, { useState, Component } from "react";
import {
  Button,
  ButtonToolbar,
  Card,
  Badge,
  Nav,
  NavLink,
  Jumbotron,
  Container,
  Form,
  Modal
} from "react-bootstrap";
// import "./MyAlert";
// import MyAlert from "./MyAlert";
import SweetAlert from "react-bootstrap-sweetalert";
import "../Modal/ModalEdit";
import ModalEdit from "../Modal/ModalEdit";
import Axios from "axios";
import { connect } from "react-redux";
import { getById } from "../../Public/Redux/Actions/library";
import { deleteId } from "../../Public/Redux/Actions/library";
import { editLibrary } from "../../Public/Redux/Actions/library";
// import MyModal from "../Modal/MyModal";

class Detail extends Component {
  // export default props => {
  constructor(props) {
    super(props);
    // this.state = { addModalShow: false };

    this.state = {
      alert: null,
      getById: [],
      deleteById: [],
      editLibrary: [],
      // library_id: [],
      // post: null,
      // book: {
      //   title: "",
      //   image: "",
      //   description: "",
      //   status: ""
      // },
      addModalShow: false,
      data: [],
      postData: [],
      show: false,
      newBook: {
        image: "",
        title: "",
        description: ""
      }
    };
  }

  // Edit Data
  async componentDidMount() {
    console.log("did mount");
    // Axios.get ('http://localhost:8000/pokemon')
    //   .then (({data}) => {
    //     this.setState ({
    //       data: data.response,
    //     });
    //   })
    //   .catch (error => {
    //     console.log ('error', error);
    //   });
    let id = this.props.match.params.id;
    await this.props.dispatch(getById(id));
    // const { libraryData } = await this.props.data;
    this.setState({
      getById: this.props.getbyid.libraryData,

      newBook: this.props.getbyid.libraryData
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      newBook: { ...this.state.newBook, [name]: value }
    });
  };

  onSubmit = e => {
    this.setState({
      btnDisabled: "disabled"
    });

    e.preventDefault();
    const { image, title, description } = this.state.newBook;

    const bookData = {
      image,
      title,
      description
    };
    let id = this.props.match.params.id;

    let edit = async data => {
      await this.props
        .dispatch(editLibrary(id, data))
        .then(() => (window.location.href = "/"));
    };
    edit(bookData);
  };

  // SweetAlert//
  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert success title="Yakin ??" onConfirm={() => this.hideAlert()}>
        Data Akan Dihapus!!
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

  handleDelete = () => {
    let id = this.props.match.params.id;
    // let deleteId = this.state.details.library_id;
    Axios.delete(`http://localhost:7000/library/delete/${id}`)
      .then(function(response) {
        window.location.href = "/";
        this.state.history.push("/");
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  // addModalClose = () => this.setState({ addModalShow: false });
  render() {
    console.log(this.state.getById);

    let addModalClose = () => this.setState({ addModalShow: false });
    // const { id, url, title, description } = this.props;
    // const post = this.state.post? (
    return (
      <Card>
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="">
            <Nav.Item>
              <Nav.Link variant="warning" href="/">
                Kembali
              </Nav.Link>
            </Nav.Item>

            <Button
              variant="primary"
              type="submit"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Edit Data
            </Button>
            <ModalEdit
              show={this.state.addModalShow}
              onHide={addModalClose}
              show={this.state.addModalShow}
              onHide={() => this.setState({ addModalShow: false })}
              image={this.state.newBook.image}
              title={this.state.newBook.title}
              description={this.state.newBook.description}
              onChange={this.handleChange}
              onSubmit={this.onSubmit}
            />

            {/* () => this.deleteThisGoal() */}
            <Nav.Item>
              <Nav.Link href="#" onClick={this.handleDelete}>
                Delete
                {/* {() => this.deleteThisGoal()} */}
                {this.state.alert}
              </Nav.Link>
              {/* <Button onClick={}>Hapus</Button> */}
              {/* <MyAlert onClick={() => this.deleteThisGoal()} /> */}
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Card.Img
            src={this.state.getById.image}
            style={{ height: "30rem" }}
          ></Card.Img>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <div className="col-md-6">
            <Button variant="warning" style={{ marginTop: "20px" }}>
              {this.state.getById.genre}
            </Button>
            <h2>{this.state.getById.title}</h2>
            <Card.Text>20 Juni 2015</Card.Text>

            <Card.Text>{this.state.getById.description}</Card.Text>
            <h3
              style={{
                // marginTop: "20rem",
                marginLeft: "rem",
                backgroundColor: "warning",
                color: "warning"
              }}
              variant="warning"
            >
              {this.state.getById.status}
            </h3>
            <div style={{ marginTop: "", marginLeft: "" }}>
              <Button variant="warning">Borrow</Button>
            </div>
          </div>
          {/* <Card.Text variant="warning">Available</Card.Text> */}
          {/* <Button variant="success" style={{ marginTop: "50px" }}>
            Available
          </Button> */}
        </Card.Body>
      </Card>
    );
    // )
  }
}

const mapStateToProps = state => {
  return {
    // data: state.library, // namaProps: state.namaReducer
    getbyid: state.getbyid,
    deleteById: state.deleteId,
    editLibrary: state.editLibrary
  };
};

export default connect(mapStateToProps)(Detail);
