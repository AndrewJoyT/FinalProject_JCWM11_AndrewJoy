import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import jam1 from '.././supports/img/slider1.jpg'
import jam2 from '.././supports/img/slider2.jpg'
import jam3 from '.././supports/img/slider3.jpg'

class Carousels extends Component {
    render(){
        return (
            <Carousel autoPlay showThumbs={false} infiniteLoop={true} centerMode={false} axis="horizontal" className="full-width-div" style={{marginLeft: '-25px', marginRight: '-25px'}}>
                <div>
                    <a href="/productsgridview">
                    <h1 style={{color: 'white'}}>BIDEN</h1>
                    <img src={jam1}
                        alt="jam" style={{height: "100%", width: "100%"}} className="img-responsive"
                        className="img-fluid" />
                    </a>
                </div>
                <div>
                    <a href="/productsgridview">
                    <h1 style={{color: 'white'}}>ALEXANDER CHRISTIE</h1>
                    <img src={jam2}
                        alt="jam" style={{height: "auto", width: "auto"}} />
                    </a>
                </div>
                <a href="/productsgridview">
                <div>
                    
                    <h1 style={{color: 'white'}}>GSHOCK</h1>
                    <img src={jam3}
                        alt="jam" style={{height: "auto", width: "auto"}} />
                    
                </div>
                </a>
            </Carousel>
        );
    }
}

export default Carousels;
