import Navbar from "../../common/Navbar/Navbar"
import About from "../Pages/about/About"
import Home from "../Pages/home/Home"
import { useRef, useState } from "react"
import './layout.css'
import Showcase from "../Pages/showcase/Showcase"
import Contact from "../Pages/contact/Contact"
import AboutCard from "../Pages/tabs/About Card/aboutCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Mainlayout = () => {
  const navbarRef = useRef(null);
  const normalPageRef = useRef(null);
  const aboutCardRef = useRef(null);
  const [aboutShow, setAboutShow] = useState(false);
  const aboutOpen = () => {
    gsap.to(normalPageRef.current, {
      opacity : 0,
      y : -30,
      duration : 0.4,
      ease : "power2.in",
      onComplete : () => {
        setAboutShow(true);
      }
    })
  }
  useGSAP(() => {
    if(aboutShow && aboutCardRef.current){
      gsap.fromTo(
        aboutCardRef.current,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out"
        }
      )
    }
  }, [aboutShow]);
  const aboutClose = () =>{
    gsap.to(aboutCardRef.current, {
      opacity: 0,
      // y: 25,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setAboutShow(false);

        requestAnimationFrame(() => {
          gsap.fromTo(
            normalPageRef.current,
            {
              opacity : 0,
              x : -50,
              y : 30
            },
            {
              opacity : 1,
              x : 0,
              duration : 1,
              y : 0,
              ease : "power3.out"
            }
          );
        });
      }
    });
  };
  return (
    <>
    {!aboutShow ? (
      <>
        <div ref={navbarRef}>
        <Navbar />
        </div>
        <div ref={normalPageRef}>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About onAboutClick={aboutOpen} />
          </section>
          <section id="showcase">
            <Showcase />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </>
    ) : (
      <div ref={aboutCardRef}>
        <AboutCard onClose={aboutClose} />
      </div>
    )}
    </>
  )
}

export default Mainlayout
