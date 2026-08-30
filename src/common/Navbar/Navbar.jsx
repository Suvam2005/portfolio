import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from  "react-bootstrap/Navbar"
import './navbar.css'
import { navbarLogo } from "../../utils/images"
import { navbarLinks } from "./NavbarItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const NavBar = ({ setActiveTab }) => {
  const navbarRef = useRef(null);
  const wrapperRef = useRef(null);
  useGSAP(() =>{
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out"
        }
      });
      tl.from(".navbar-main", {
        y: -100,
        opacity: 0,
        duration: 0.8
      })
      .from(".navbar-logo", {
        x: -30,
        opacity: 0,
        duration: 0.6
      }, "-=0.4")
      .from(".nav-links", {
        y: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5
      }, "-=0.3");
    });
    mm.add("(max-width: 991.2px)", () => {
      gsap.from(".navbar-main", {
        y: 100,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      });
      gsap.from(".nav-links", {
        y: 30,
        opacity: 0,
        scale: 0.8,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.2,
        ease: "back.out(1.7)"
      });
      gsap.from(".nav-icon", {
        scale: 0,
        rotation: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.35,
        ease: "back.out(1.7"
      });
    });
  })
  return (
    <>
    <div ref={wrapperRef}>
    <Navbar ref={navbarRef} expand = "lg" className="navbar-main" variant="dark">
      <Container fluid className="cont-navbar px-0">
        <div className="nav-top">
          <Navbar.Brand className={`navbar-brand-custom ${setActiveTab === navbarLogo.href ? "active" : ""}`} href= {navbarLogo.href} >
            <img alt="logo" src= {navbarLogo.logo} className="navbar-logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center nav-items">
            {navbarLinks.map((navbarLink) =>{
              return(
                <Nav.Link key={navbarLink.id} className={`nav-links ${setActiveTab === navbarLink.href ? "active" : ""}`} href={navbarLink.href}><FontAwesomeIcon icon={navbarLink.icon} className="nav-icon" />{navbarLink.title}</Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default NavBar