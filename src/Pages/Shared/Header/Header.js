import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from "react-icons/fa";


import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import Image from 'react-bootstrap/Image';
import './Header.css';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, SignOut } = useContext(AuthContext);
    const logOut = () => {
        SignOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#1E2F50" }}>
                <Container>
                    <Navbar.Brand className="d-flex align-items-center">
                        <Image src={logo} style={{ width: "100px", marginTop: "-10px" }}></Image>
                        <h3 className="text-light" style={{ paddingTop: "15px" }}>TryCatch</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto nav-item">

                            <NavLink to="/courses" activeclassname="active">COURSES</NavLink>
                            <NavLink to="/faq" activeclassname="active">FAQ</NavLink>
                            <NavLink to="/blog" activeclassname="active">BLOG</NavLink>


                            {
                                user?.uid ?
                                    <>
                                        {user?.photoURL ?
                                            <>
                                                <abbr title={user.displayName}> <Image src={user?.photoURL}
                                                    style={{ height: '30px' }}
                                                    roundedCircle></Image></abbr>
                                            </> :
                                            <>
                                                <FaUserAlt className='fs-2 text-white'></FaUserAlt>
                                            </>

                                        }
                                        <button className='btn btn-danger btn-sm ms-2' onClick={logOut}>LogOut</button>
                                    </>
                                    :
                                    <>
                                        <NavLink to="/login" activeclassname="active">LOGIN</NavLink>
                                        <NavLink to="/register" activeclassname="active">REGISTER</NavLink>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;