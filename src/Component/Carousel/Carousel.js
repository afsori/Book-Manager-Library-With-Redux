// function Carousel() {
//   return (
//     <div>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=First slide&bg=373940"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Carousel;
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
// import Carousel from "nuka-carousel";
import "./Carousel.css";
import { Carousel } from "3d-react-carousal";
// import Carousel from "Carousal";

// var Carousel = require( '3d-react-carousal').Carousel;

// export default class extends React.Component {
//   render() {
//     return (
// <container
//   style={{
//     height: "30rem",
//     width: "80rem"
//   }}
// >
//   <row className="col">
//     <Carousel
//       style={{ width: "108rem", height: "40rem", paddingTop: "fixed" }}
//       className="Col-md-25"
//     >
//       <img src="https://images.hukumonline.com/frontend/lt5c24324708883/medium_lt5c35c5db8631a.jpg" />
//       <img src="https://images.hukumonline.com/frontend/lt5c24324708883/medium_lt5c35c5db8631a.jpg" />
//       <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
//       <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
//       <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
//       <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
//       <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
//       <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
//       <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
//     </Carousel>
//   </row>
// </container>

//     );
//   }
// }

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let slides = [
      <img
        src="https://ebooks.gramedia.com/ebook-covers/49960/image_highres/ID_HAHAEK2019MTH11.jpeg"
        alt="1"
        style={{ width: "80rem", height: "20rem" }}
      />,
      <img
        src="https://ebooks.gramedia.com/ebook-covers/49951/image_highres/ID_FDTHDTPHI2019MTH11.jpg"
        style={{ width: "80rem", height: "20rem" }}
        alt="2"
      />,
      <img
        src="https://ebooks.gramedia.com/ebook-covers/49949/image_highres/ID_FITDM2019MTH11.jpg"
        alt="3"
        style={{ width: "80rem", height: "20rem" }}
      />,
      <img
        src="https://ebooks.gramedia.com/ebook-covers/49928/image_highres/ID_DDIP2019MTH11.jpeg"
        alt="4"
        style={{ width: "80rem", height: "20rem" }}
      />,
      <img
        src="https://ebooks.gramedia.com/ebook-covers/49960/image_highres/ID_HAHAEK2019MTH11.jpeg"
        style={{ width: "80rem", height: "20rem" }}
        alt="6"
      />,
      <img
        src="
        https://ebooks.gramedia.com/ebook-covers/49950/image_highres/ID_FDRMAPI2019MTH11.jpg"
        style={{ width: "80rem", height: "20rem" }}
        alt="6"
      />,
      <img
        src="
        https://ebooks.gramedia.com/ebook-covers/49945/image_highres/ID_EHDPP2019MTH11.jpg"
        style={{ width: "80rem", height: "20rem" }}
        alt="6"
      />,
      <img
        src="
        https://ebooks.gramedia.com/ebook-covers/49389/image_highres/ID_BL2019MTH09BL.jpg"
        style={{ width: "80rem", height: "20rem" }}
        alt="6"
      />,
      <img
        src="https://ebooks.gramedia.com/ebook-covers/49928/image_highres/ID_DDIP2019MTH11.jpeg"
        style={{ width: "80rem", height: "20rem" }}
        alt="6"
      />
    ];
    return (
      <div
        className="container"
        style={{
          height: "25rem"
          // width: "80rem",
          // marginBottom: "2px",
          // paddingTop: "-3px"
        }}
      >
        <container
          style={{
            height: "30px"
            // width: "80rem",
            // marginBottom: "2px",
            // paddingTop: "-3px"
          }}
        >
          {/* <div className="col-md-50"> */}
          {/* <header className="App-header"> */}
          {/* <h1 className="App-title"></h1> */}
          {/* </header> */}
          <Carousel slides={slides} />

          {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
          {/* </div> */}
        </container>
      </div>
    );
  }
}

export default MyCarousel;
