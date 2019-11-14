import React from "react";
import buku1 from "./assets/hadisekonomi.jpeg";
import buku2 from "./assets/filsafatilmu.jpg";
import buku3 from "./assets/filsafathukum.jpg";
import buku4 from "./assets/fikihkontemporer.jpg";
import buku5 from "./assets/bisnisislam.jpg";
import buku6 from "./assets/dasarlogika.jpg";
import buku7 from "./assets/ekonomiislam.jpg";
import buku8 from "./assets/surgaayah.jpg";
import buku9 from "./assets/perjalananpanjang.jpg";

import "./Detail";
import { Link } from "react-router-dom";
// import buku6 from "./assets/perusahaan.jpg";
// import Header from "./Component/Header";
// import Carousel from "./Component/Carousel";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  CardGroup,
  Card,
  CardDeck
} from "react-bootstrap";

export default class extends React.Component {
  render() {
    return (
      // <container>
      <div className="container">
        <div className="row">
          {/* <row className="col-sm-13"> */}
          <CardDeck className=" center">
            <Card>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}

              <Card.Img
                className="center"
                style={{ width: "10rem", height: "10rem" }}
                variant="top"
                src={buku1}
              />

              <Card.Body>
                <Card.Title>Hadis Hadis Ekonomi</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="/Detail"
                  navigate="Detail"
                  to="/Detail"
                >
                  Beli Buku
                </Button>
                {/* <a className="menu-item" href="/Detail">
                  History
                </a> */}
              </Card.Body>
            </Card>
           
          </CardDeck>
          {/* </row> */}
        </div>
      </div>
    );
  }
}


import React from "react";
// import buku1 from "./assets/hadisekonomi.jpeg";
// import buku2 from "./assets/filsafatilmu.jpg";
// import buku3 from "./assets/filsafathukum.jpg";
// import buku4 from "./assets/fikihkontemporer.jpg";
// import buku5 from "./assets/bisnisislam.jpg";
// import buku6 from "./assets/dasarlogika.jpg";
// import buku7 from "./assets/ekonomiislam.jpg";
// import buku8 from "./assets/surgaayah.jpg";
// import buku9 from "./assets/perjalananpanjang.jpg";

import "../Detail/Detail";
import { Link } from "react-router-dom";
// import buku6 from "./assets/perusahaan.jpg";
// import Header from "./Component/Header";
// import Carousel from "./Component/Carousel";

import { Button, Card, CardDeck } from "react-bootstrap";

const Cards = props => {
  const { library_id, image, title, description } = props;

  return (
    <container className="row" style={{ margin: "auto" }}>
      <div className="container">
        <div className="">
          {/* <row className="col-sm-13"> */}
          <CardDeck className=" box">
            <Card>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}

              <Card.Img
                className="center"
                style={{ width: "10rem", height: "10rem" }}
                variant="top"
                src={image}
              />

              <Card.Body>
                <h2>{title}</h2>
                {/* <p>{description}</p> */}
                <Link to={`/Detail/${library_id}`}>
                  <Button variant="primary">Beli Buku</Button>
                </Link>
                {/* <a className="menu-item" href="/Detail">
                  History
                </a> */}
              </Card.Body>
            </Card>
          </CardDeck>

          {/* </row> */}
        </div>
      </div>
    </container>
  );
};
export default Cards;
