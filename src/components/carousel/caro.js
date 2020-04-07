import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import two from "./two.jfif"
import four from "./four.jfif"
import "./caro.css"

function Caro(){
    return(
        <div>
        <Carousel>
  <Carousel.Item>
  <div className="carosuel-item">
    <img
      className="d-block w-100 img-responsive"
      src={two}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Spill Proof Tshirts</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carosuel-item">
    <img
      className="d-block w-100 four img-responsive"
      src={four}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Shop for Men</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carosuel-item img-responsive">
    <img
      className="d-block w-100"
      src={two}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Shop for women</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>
</div>
    )
}
export default Caro