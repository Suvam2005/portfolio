import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './home.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
  const Home = () => {
    useGSAP(() => {
      const tl = gsap.timeline();
      const mm = gsap.matchMedia();
      mm.add("(max-width: 991.2px)", () =>{
        tl.from(".hero-bg", {
          scale : 1,
          opacity : 0,
          duration : 0.5,
          delay : 0.5
        })
        tl.from(".hero-name", {
          x : -380,
          duration : 0.8
        })
        .from(".hero-subname", {
          x : -250,
          duration : 0.8
        })
        .from(".hero-para", {
          x : -310,
          duration : 0.8
        })
      });
      mm.add("(min-width: 992px)", () => {
        tl.from(".hero-bg", {
          scale : 1,
          opacity : 0,
          delay : 0.5
        })
        tl.from(".hero-name", {
          x : -570,
          duration : 0.8,
        })
        .from(".hero-subname", {
          x : 220,
          duration : 0.8
        })
        .from(".hero-para", {
          x : -360,
          duration : 0.8
        })
      })
    })
    return (
      <Container fluid className="lg hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <Row className="pt-5 main-div">
            <Col xs = {8} className="h1-col">
              <h1 className="hero-name">Suvam</h1>
            </Col>
            <Col className="right-cont">
              <h2 className="hero-subname">Creating Websites That Feel Alive</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="hero-para">Turning Creative Ideas into Interactive and <span>High Quality Web Experience</span></p>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }

  export default Home