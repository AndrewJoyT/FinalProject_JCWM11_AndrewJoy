import React, { Component } from 'react';
import gambar1 from './../supports/img/bg1.jpg'
import gambar2 from './../supports/img/bg2.jpg'
import gambar3 from './../supports/img/bg3.jpg'

class HomeCard extends Component {
    render() {
        return(
            <div style={{fontSize:'50px', marginTop:'-220px', paddingBottom:'0px', textAlign:'center'}}>
                WHY ROLEX?
            <div className="row">
                <div className="col col-md-6 " style={{height: '400px', paddingTop:'20px'}} > 
                <img src={gambar1}style={{ width: "102.5%",height: "414px"}}></img>
                </div>
                <div className="col col-md-6 bg-light border" style={{marginTop: '20px',}}>
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>Rolex watches are tough as nails</h1>
                    <h5 className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>This is a fact. Between all brands of watches, Rolex rate among the sturdiest, even if they are considered fit for a formal dinner - and this is not something every brand of watch can say. Remember that Rolex watches, and I intend mainly the luxury sports ones, were primarily made as “tool watches”. A tool watch is a watch that is made for a specific purpose, other than telling time. And this purpose was being sporty, and not afraid of contact with water - something that instead was a bane for almost every dress watch.</h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-primary btn-lg" style={{width: '150px', paddingTop: '10px'}}>Buy Now</button>
                    </a>
                    <h1 style={{paddingTop:'24px'}}>     </h1>
                    </center>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col col-md-6 bg-light border">
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>Rolex watches are extremely precise</h1>
                    <h5 className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>This is another old goal of Rolex watches: making a timepiece that was extremely precise in keeping time. It was one of its primary goals - and it fulfilled it so well that in 1914, the Kew Observatory awarded a Rolex watch a Class A precision certificate, a distinction normally granted exclusively to marine chronometers.</h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-primary btn-lg" style={{width: '150px', paddingTop: '10px'}}>Buy Now</button>
                    </a>
                    </center>
                </div>
                <div className="col col-md-6 " style={{height: '400px'}}>
                <img src={gambar2}style={{ width: "100%",height: "400px"}}></img>
                </div>
            </div>  
            
            <div className="row mt-5" >
                <div className="col col-md-6 " style={{height: '400px'}}>
                <img src={gambar3}style={{ width: "110%",height: "400px"}}></img>
                </div>
                <div className="col col-md-6 bg-light border">
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>Rolex watches are an icon of design</h1>
                    <h5 className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>The Rolex craze is quite a recent feat, going back around ten years or so. As you probably know, nowadays you cannot buy a new Submariner in steel just by getting into a Rolex boutique. There is a long waiting list to get one - years and years - due to extensive request and limited supply.</h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-primary btn-lg" style={{width: '150px', paddingTop: '10px'}}>Buy Now</button>
                    </a>
                    </center>
                    
                </div>
                
            </div>
            
            </div>
        )
    }
}

export default HomeCard;