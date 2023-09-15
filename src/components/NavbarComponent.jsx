import {Navbar, Container, Nav} from "react-bootstrap";
import {useState,useEffect} from "react";

import {navLinks} from "../data/index"; 
import { NavLink } from "react-router-dom";
import LoginPage from "../pages/LoginPage";


const NavbarComponent = () => {

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if(window.scrollY > 10){
      setChangeColor(true);
    }
    else{
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  })

  return (
    <div>
        
    <Navbar expand="lg" fixed="top" className={changeColor ? "ubah-warna" : ""}>
        <Container>
            <Navbar.Brand className="navbarbrand" to={LoginPage}>GetTogather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="text-center">
                {navLinks.map((link) => {
                  return (
                    <div key={link.id} className="nav-link">
                      <NavLink to={link.path} className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                      } end>{link.text}</NavLink>
                    </div>
                  );
                })}
            </Nav>

            <div className="text-center btnlogin">
              <button>Log In</button>
            </div>

            </Navbar.Collapse>
        </Container>
    </Navbar>

    </div>
  )
}

export default NavbarComponent