// export default Header;
import React, { Component } from "react";
// import Drawers from "./Drawers";
// import library from "../assets/library.png";

import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavDropdown,
  Form,
  Button,
  Image,
  Card,
  FormControl,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Col
} from "react-bootstrap";
// import Drawers from "./Component/Drawers";
import Drawers from "../Navbar/Drawers";

import { search } from "../../Public/Redux/Actions/library";

// function Header() {
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    // const bookSearch = book.filter(books =>{
    //   return books.title.tolower
    // })
    return (
      <div className=" ">
        <Navbar bg="light" expand="lg" style={{ height: "6rem" }}>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="all kategori ">
              <NavDropdown title="All Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav className="all time">
              <NavDropdown
                title="All Time"
                id="basic-nav-dropdown"
                // style={{ height: "3rem" }}
              >
                <NavDropdown.Item href="#action/3.1">24hour</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">1month</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">1year</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form inline style={{ height: "10rem" }}>
              <FormControl
                style={{ height: "3rem" }}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                // value={this.search}
                onChange={this.props.handleSearch}
              />
              <Button variant="outline-success" style={{ height: "3rem" }}>
                Search
              </Button>
            </Form>
            {/* <Image
            src={library}
            rounded
            style={{ width: "9rem", height: "9rem", marginLeft: "30rem" }}
          /> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
      //   </nav>
      // </div>
    );
  }
}
//   return (
//     // <container className="" style={{ height: "50rem", width: "50rem" }}>

//   );
// }
// const mapStateToProps = state => {
//   return {
//     data: state.search
//   };
// };

export default Header;
