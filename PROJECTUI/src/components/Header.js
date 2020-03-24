import React, { Component } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,

} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onUserLogout } from '../actions';
import Cookies from 'universal-cookie';
import { FiShoppingCart,FiSearch } from "react-icons/fi";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch, faArchive, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cookies = new Cookies();
class HeaderReact extends Component {

    state = {
        listCart: []
    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onLogoutSelect = () => {
        if (window.confirm('Are you sure want to Logout?')) {
            if (this.props.onUserLogout()) {
            }
            cookies.remove('usernameCookie', 'emailCookie', 'roleCookie');
            window.location = '/';
        }
    }

    render() {
        if (this.props.username === "") {

            return (

                <div className='headerbody'>
                         <div className='container'>
                         <div className='row '>
     
                            <div className='col-md-4 '>
                            
                            </div>
     
                            <div className='col-md-4 headerlogo'>
                            <Link to={"/"} style={{color:'black', textDecoration:'none'}}>
                            ANDREWATCH
                             </Link>
                            
                            </div>
                            
                            <div className='col-md-4 logo'>
                            <Link to={"/login"} >
                            <AiOutlineUser className='iconuser logo'/> 
                            </Link>
                            <Link to={"/search"} >
                            <FiShoppingCart className='iconcart logo'/>
                            </Link>
                            <Link to={"/search"} >
                            <FiSearch className='iconsearch logo'/>   
                            </Link>   
                            </div>
                            </div>  
                            </div>
                                <div className='itulahitu '>
                                <div className='row '>
                                
                                <div className='col-md-3 menu  '>
                              
                                <Link to={"/NEW "} style={{color:'black', textDecoration:'none' }}>
                                        NEW
                                </Link>
                               
                                </div>
                                    
                                <div className='col-md-3 menu  '>
                                <a href='/productsgridview'>
                                <Link to={"/productsgridview"} style={{color:'black', textDecoration:'none'}}>
                                        PRODUCT
                                </Link>
                                </a>
                               
                                </div>
        
                                <div className='col-md-3 menu '>
                               
                                <Link to={"/CATEGORY "} style={{color:'black', textDecoration:'none'  }}>
                                      CATEGORY                        
                                      </Link>
                                     
                                </div>
        
                                <div className='col-md-3 menu  '>
                               
                                <Link to={"/PROMO "} style={{color:'black', textDecoration:'none' }}>
                                       PROMO ITEM
                                </Link>
                               
                               
                                 </div>
        
                                 </div>
                                 </div>
                                 <div className='hr'></div>
                           
                                </div> 
                
                // <div style={{ margin: '0 0 90px 0' }}>
                //     <Navbar color="dark" dark expand="md" fixed="top" className="shadow">
                //         <NavbarBrand href="/" style={{ fontSize: "16px", lineHeight: 'auto' }}>
                //             <h2 style={{ lineHeight: '30px',fontFamily:'Open Sans' }}>ANDREWATCH</h2>
                //         </NavbarBrand>
                //         <NavbarToggler onClick={this.toggle} />
                //         <Collapse isOpen={this.state.isOpen} navbar>

                //                   <a href ='/productsgridview'>
                //                    <div className='container'  style={{fontSize:'20px', paddingLeft:'360px', color:'white',lineHeight: '30px',fontFamily:'Open Sans'}}>
                //                       ALL PRODUCT 
                //                    </div>
                //                    </a>
                        
                            
                           
                            

                //             <ul className="navbar-nav ml-auto">


                                
                //                     <div className='col-md-6'>
                //                         <Link to={"/login"}>
                //                         <AiOutlineUser className='iconuser logo'/>             
                //                      </Link>
                              
                                
                //                 </div>
                                
                                

                //             </ul>
                //         </Collapse>
                //     </Navbar>
                // </div>
            )

        } else if (this.props.username !== '' && this.props.role === 'MEMBER') {
            return (

                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="dark" dark expand="md" fixed="top" className="shadow">
                        <NavbarBrand href="/" style={{ fontSize: "16px" }}>
                            <h2 style={{ lineHeight: '30px' }}>Welcome, {this.props.username}</h2>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar style={{ fontSize: "20px", fontWeight: "bold" }}>
                                <NavItem style={{ fontSize: '16px', lineHeight: '20px' }}>
                                    <button type="button" className="btn btn-danger btn-raised btn-round" onClick={this.onLogoutSelect}>Log out</button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <div style={{ height: '40px', marginRight: '-15px', marginLeft: '-15px', marginTop: '60px', backgroundColor: 'black', fontSize: '16px', lineHeight: '2em' }} className="text-center fixed-top font-weight-normal">
                        <div style={{ marginTop: '3px' }}>
                            <span><a href="/" style={{ marginRight: '40px' , color:'white' }}><i className="fa fa-th"></i>  PRODUCT &nbsp;</a></span>
                            <span><a href="/cart" style={{ marginRight: '40px' , color:'white' }}><i className="fa fa-shopping-cart"></i>  CART &nbsp;</a></span>
                            <span><a href="/wishlist" style={{ marginRight: '40px' , color:'white' }}><i className="fa fa-heart"></i> WISHLIST &nbsp;</a></span>
                            <span><a href="/history" style={{ marginRight: '0px' , color:'white' }}><i className="fa fa-history"></i>  HISTORY&nbsp;</a></span>
                            <span><a href="/confirmorder" style={{ marginLeft: '40px', color:'white' }}><i className="fa fa-check" ></i>  CONFIRM PAYMENT &nbsp;</a></span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="light" light expand="md" fixed="top" className="shadow">
                        <NavbarBrand href="/admin/productsgridview" style={{ fontSize: "16px" }}>
                            <h2 style={{ lineHeight: '30px' }}>Welcome, {this.props.username}</h2>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar style={{ fontSize: "14px", fontWeight: "bold" }}>
                                <NavItem style={{ fontSize: '14px', lineHeight: '14px' }}>
                                    <button type="button" className="btn btn-outline-primary" onClick={this.onLogoutSelect} >Log out</button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        role: state.auth.role
    }
}

export default connect(mapStateToProps, { onUserLogout })(HeaderReact);