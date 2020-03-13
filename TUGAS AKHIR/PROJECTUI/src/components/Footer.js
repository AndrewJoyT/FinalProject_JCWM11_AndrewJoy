import React, { Component } from 'react';

import { FaHome, FaPhone, FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiOutlineMail, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

class Footer extends Component {
    render() {        
            return ( <div className='footerpage'>
        <div className='container '>
            <div className='row contentfooter'>
                
                <div className='col-md-4 footernyaa'>
                <h5>Contact Us</h5>
                <p><FaHome/> Jakarta, Indonesia</p>
                <p><AiOutlineMail/> contact@berjamtangan.com</p>
                <p><FaPhone/> 0821-1998-9945</p>

                </div>
                <div className='col-md-4'>
                <h5>Information</h5>
                <p>About Us </p>
                <p> Privacy Policy </p>
                <p> Contact Us </p>
                
                </div>
                <div className='col-md-4 logofooter'>
                <h5>Follow Us</h5>
                <FaFacebook/>
                <AiFillTwitterCircle/>
                <AiOutlineInstagram/>
                <TiSocialYoutubeCircular/>
                
                </div>
            </div>
        </div>
       </div>  );
            }
        }
        
export default Footer;