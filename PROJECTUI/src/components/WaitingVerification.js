import React, { Component } from 'react';

class WaitingVerification extends Component {
    render() {
        return (
            <div style={{ height: '329px'}}>
            <div className="d-flex justify-content-center outline-dark" style={{marginTop: '130px',}}>
                <div className="alert alert-warning  col-md-4 mt-5 border-dark " style={{ fontSize: "20px" }}>
                  <center><b style={{color:'black', fontSize:'20px'}}>Please Check Your Email For Account Verification Process</b><br/></center>
                </div>
            </div>
            </div>
        )
    }
}

export default WaitingVerification;
