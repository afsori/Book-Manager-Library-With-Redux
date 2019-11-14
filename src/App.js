import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Carousel } from "reactstrap";
import Header from "../src/Component/Navbar/Header";
import Carousel from "../src/Component/Carousel/Carousel";
import Cards from "../src/Component/Cards/Card";
import Detail from "./Component/Detail/Detail";
import MyModal from "../src/Component/Modal/MyModal";
import MyAlert from "./Component/Modal/MyAlert";
import ModalEdit from "./Component/Modal/ModalEdit";
import books from "../src/Component/Helpers/books";
// import Pagination from "../src/Component/Navbar/Pagination";
import {
  Modal,
  Button,
  Nav,
  Form,
  CardDeck,
  Card,
  CardGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

import { connect } from "react-redux"; //higher order component (HOC)

import { getLibrary } from "./Public/Redux/Actions/library";
import { postLibrary } from "./Public/Redux/Actions/library";
import { search } from "./Public/Redux/Actions/library";

import Drawers from "../src/Component/Navbar/Drawers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      data: [],
      postData: [],
      show: false,
      newBook: {
        image: "",
        title: "",
        description: ""
      },
      currenctPage: 1,
      dataPerPage: 3
    };
  }

  // state = {};
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
    await this.props.dispatch(getLibrary());
    // const { libraryData } = await this.props.data;
    this.setState({
      data: this.props.data.libraryData
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      newBook: { ...this.state.newBook, [name]: value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { image, title, description } = this.state.newBook;

    const bookData = {
      image,
      title,
      description
    };
    // let data = this.props.match.params.data;

    let add = async data => {
      await this.props
        .dispatch(postLibrary(data))
        .then(() => (window.location.href = "/"));
    };
    add(bookData);
  };

  // Search
  async handleSearch(event) {
    event.preventDefault();
    const title = event.target.value;
    if (title !== "") {
      await this.props.dispatch(search(title));
      this.setState({ data: this.props.getBoook.libraryData });
      console.log(title);
    } else {
      await this.props.dispatch(getLibrary());
      this.setState({
        data: this.props.data.libraryData
      });
    }
  }
  render() {
    // const indexOfflastpost = this.state.currenctPage * this.state.dataPerPage;
    // const indexOffirstPost = indexOfflastpost - this.state.dataPerPage;
    // const currenctPage = this.state.data.slice(
    //   indexOffirstPost,
    //   indexOfflastpost
    // );
    return (
      <div>
        <Drawers showModal={() => this.setState({ addModalShow: true })} />
        <Header handleSearch={this.handleSearch.bind(this)} />{" "}
        {/* <Header /> */}
        <br></br>
        <Carousel />
        <MyModal
          show={this.state.addModalShow}
          onHide={() => this.setState({ addModalShow: false })}
          image={this.state.newBook.image}
          title={this.state.newBook.title}
          description={this.state.newBook.description}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
        />
        <div className="">
          <div className=" ">
            <div>
              {/* <div className="card-deck mb-5"> */}

              <div>
                {this.state.data.length > 0 ? (
                  <CardGroup
                    style={{
                      // display: "inline-block",
                      width: "200rem",
                      margin: "5rem"

                      // height: "10rem",
                    }}
                  >
                    <CardDeck
                    // style={{
                    //   display: "inline-block"
                    // }}
                    >
                      {this.state.data.map((item, index) => {
                        return (
                          <Card>
                            {/* <img src={logo} className="App-logo" alt="logo" /> */}

                            <Card.Img
                              key={index}
                              // className="center"
                              // style={{ width: "20rem", height: "20rem" }}
                              // variant="top"
                              src={item.image}
                              alt={item.name}
                            />

                            <Card.Body>
                              <h2>{item.title}</h2>
                              {/* <p>{description}</p> */}
                              <Link to={`Detail/${item.library_id}`}>
                                <Button variant="primary">Beli Buku</Button>
                              </Link>
                            </Card.Body>
                          </Card>
                        );
                      })}
                    </CardDeck>
                  </CardGroup>
                ) : (
                  <p>Array Kosong</p>
                )}
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* <Pagination
            totalData={this.state.data.length}
            dataPerPage={this.state.dataPerPage}
            paginate={pgnum => this.setState({ currenctPage: pgnum })}
          /> */}
        </div>
        {/* </row> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </container> */}
      </div>
      // </body>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.library, // namaProps: state.namaReducer
    postData: state.postLibrary,
    getBoook: state.search
  };
};

export default connect(mapStateToProps)(App);

// const Navigation=()=>{
//   return(
//     <div>
//       <p></p>
//     </div>
//   )
// }
// export default Navigation;
