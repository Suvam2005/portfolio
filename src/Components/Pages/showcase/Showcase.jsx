import Container from "react-bootstrap/esm/Container"
import './showcase.css'
import { useState } from "react"
import { showCaseDatas } from "./Showcasedatas"
import Projects from "../tabs/Projects/Projects"
import Techstack from "../tabs/Tech stack/Techstack"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import Button from "../../../ui/Button"
const Showcase = () => {
  const[isActiveTab, setIsActiveTab] = useState("projects");
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width : 992px)", () => {
      gsap.from(".showcase-para", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
        trigger: ".showcase",
        scroller: "body",
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
      })
      gsap.fromTo(".showcase-heading", {
        y : 100,
        opacity : 0
      },
      {
        y : 0,
        opacity : 1,
        duration : 0.5,
        scrollTrigger : {
          trigger : ".showcase-heading",
          scroller : "body",
          start : "top 85%",
          end : "bottom 20%",
          // markers : true,
          toggleActions : "play none none reverse"
        }
      })
      gsap.fromTo(".buttons-main", {
        opacity : 0
      },
    {
      opacity : 1,
      duration : 0.8,
      scrollTrigger : {
        trigger : ".tab-content",
        scroller : "body",
        start : "top 85%",
        end : "bottom 20%",
        // markers : true,
        toggleActions : "play none none reverse"
      }
    })
      gsap.fromTo(".tab-content", {
        opacity : 0
      },
      {
        opacity : 1,
        duration : 0.8,
        scrollTrigger : {
          trigger : ".tab-content",
          scroller : "body",
          start : "top 85%",
          end : "bottom 15%",
          // markers : true,
          toggleActions : "play none none reverse"
        }
      }
    )
    })
    mm.add("(max-width : 991.2px)", () => {
      gsap.from(".showcase-para", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
        trigger: ".showcase",
        scroller: "body",
        start: "top 65%",
        toggleActions: "play none none reverse"
      }
      })
      gsap.fromTo(".showcase-heading", {
        y : 50,
        opacity : 0
      },
      {
        y : 0,
        opacity : 1,
        duration : 0.8,
        scrollTrigger : {
          trigger : ".tab-content",
          scroller : "body",
          start : "top 98%",
          end : "bottom 2%",
          // markers : true,
          toggleActions : "play none none reverse"
        }
      })
      gsap.fromTo(".buttons-main", {
        opacity : 0
      },
    {
      opacity : 1,
      duration : 0.8,
      scrollTrigger : {
        trigger : ".tab-content",
        scroller : "body",
        start : "top 90%",
        end : "bottom 10%",
        // markers : true,
        toggleActions : "play none none reverse"
      }
      })
      gsap.fromTo(".tab-content", {
        opacity : 0
      },
      {
        opacity : 1,
        duration : 0.8,
        scrollTrigger : {
          trigger : ".tab-content",
          scroller : "body",
          start : "top 90%",
          end : "bottom 10%",
          // markers : true,
          toggleActions : "play none none reverse"
        }
      }
    )
    })
  })
  return (
    <Container fluid className="lg showcase">
      <p className="showcase-para">SHOWCASE</p>
      <h1 className="showcase-heading">Portfolio Showcase</h1>
      <div className="buttons-main">
        <div className= {`toggle-slider ${isActiveTab === "projects" ? "left" : "right"}`}>
        </div>
        {
          showCaseDatas.map((showCaseData) =>{
            return(
            <Button classname = {`btns-show ${isActiveTab === showCaseData.key ? "btn-active" : ""} ${showCaseData.classname  || " "}`} key={showCaseData.key} onClick={() => setIsActiveTab(showCaseData.key)}>
              {showCaseData.name}
            </Button>
            )
        })
        }
      </div>
      <div className="tab-content">
        {isActiveTab === "projects" && <Projects />}
        {isActiveTab === "tech-stack" && <Techstack />}
      </div>
    </Container>
  )
}

export default Showcase