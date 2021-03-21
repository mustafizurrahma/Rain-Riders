import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
// import { Link } from 'react-router-dom';

import './Navbar.css'
const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser);
    return (
        <div className="header-wrap container">
            <Navbar expand="lg">
                <Navbar> <Link to='/'><h2>RAIN-<span className="title-color">RIDESRS</span></h2></Link></Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">Home</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        
                        {loggedInUser.email ? <span className="nav-link">{loggedInUser.displayName}</span> : <Link className="login-page" to="/login">Login</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <div className="header-logo">
                <Link to='/'><h2>ASM-RIDESRS</h2></Link>

            </div>
            <div className="header-navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="login-page">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

export default Home;