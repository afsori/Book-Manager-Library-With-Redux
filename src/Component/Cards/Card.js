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
    <container className="row">
      <div className="container">
        <div className="">
          <row className="">
            <CardDeck className=" box">
              <Card>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                <Card.Img
                  className="center"
                  // style={{ width: "50rem", height: "50rem" }}
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
          </row>
        </div>
      </div>
    </container>
  );
};
export default Cards;
