import React, { Component } from 'react';
import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onUserLogout } from '../actions';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArchive, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="dark" dark expand="md" fixed="top" className="shadow">
                        <NavbarBrand href="/" style={{ fontSize: "16px", lineHeight: 'auto' }}>
                            <h2 style={{ lineHeight: '30px',fontFamily:'Open Sans' }}>ANDREWATCH</h2>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>

                                  <a href ='/productsgridview'>
                                   <div className='container'  style={{fontSize:'20px', paddingLeft:'450px', color:'white',lineHeight: '30px',fontFamily:'Open Sans'}}>
                                      ALL PRODUCT 
                                   </div>
                                   </a>
                        
                            
                           
                            

                            <ul className="navbar-nav ml-auto">


                                <li className="material-icons">
                                    <a className="nav-link btn btn-light btn-round" href="login" >
                                        Login
                                     </a>
                                     
                                </li>
                                <div style={{fontSize:'30px',color:'white'}}>
                                    OR
                                </div>
                                <li className="nav-item">
                                    <a href="/register" className="btn btn-light btn-round" data-toggle="dropdown">
                                        Register
	                                </a>
                                </li>

                            </ul>
                        </Collapse>
                    </Navbar>
                </div>
            )

        } else if (this.props.username !== '' && this.props.role === 'MEMBER') {
            return (

                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="dark" dark expand="md" fixed="top" className="shadow">
                        <NavbarBrand href="/" style={{ fontSize: "16px" }}>
                            <h2 style={{ lineHeight: '30px' }}>Hai, {this.props.username}</h2>
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
                    <div style={{ height: '40px', marginRight: '-15px', marginLeft: '-15px', marginTop: '60px', backgroundColor: 'silver', fontSize: '16px', lineHeight: '2em' }} className="text-center fixed-top font-weight-normal">
                        <div style={{ marginTop: '3px' }}>
                            <span><a href="/" style={{ marginRight: '40px' }}><i className="fa fa-th"></i>  Product &nbsp;</a></span>
                            <span><a href="/cart" style={{ marginRight: '40px' }}><i className="fa fa-shopping-cart"></i>  Cart &nbsp;</a></span>
                            <span><a href="/wishlist" style={{ marginRight: '40px' }}><i className="fa fa-heart"></i> Wishlist &nbsp;</a></span>
                            <span><a href="/history" style={{ marginRight: '0px' }}><i className="fa fa-history"></i>  History Trx &nbsp;</a></span>
                            <span><a href="/confirmorder" style={{ marginLeft: '40px' }}><i className="fa fa-shopping-basket"></i>  Confirm Payment &nbsp;</a></span>
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