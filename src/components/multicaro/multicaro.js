import React, { Component } from 'react';
import './multicaro.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hp from "./hp.jfif"

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

class Multicaro extends Component {

    state = {
        loading: false,
        imgUrl: [],
        price: ["100","99","250","670","540","3000","900"]
    }

    

    render(props) {
        return (
            <div className="about container">
                <h1 className="text-center"><b>{this.props.title}</b></h1>
                 <div>
                       <Carousel responsive={responsive}>
                        {this.state.price.map((price, indx) => {
                            return (

                                <div className="card text-left mt-5" key={indx}>
                                    <img className="media-img card-img-top" src={hp} alt="Alt text"></img>
                                

                                    <div className="card-body">
                                        <h5 className="card-title text-center">&#8377; {price}</h5>
                                        
                                        <a href="#" target="_blank" className="text-center">SEE</a>
                                    </div>
                                </div>

                            )
                        })}
                         </Carousel>
                    </div>
            </div>
        )
    }
}
export default Multicaro;