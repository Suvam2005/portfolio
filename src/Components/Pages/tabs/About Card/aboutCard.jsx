import Container from 'react-bootstrap/esm/Container'
import Button from '../../../../ui/Button'
import resume from "../../../../utils/resume/Proffesional Suvam ATS resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import './aboutCard.css'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { aboutCardImg } from '../../../../utils/images'
const AboutCard = ({onClose}) => {
  useGSAP(() =>{
    gsap.fromTo(".heading h1",
      {
        text: ""
      },
      {
        text: "About Myself",
        duration: 1.6,
        delay: 0.5
      }
    )
  })
  return (
    <Container fluid className='lg about-card-page'>
      <div className="img-about">
        <img src= {aboutCardImg.aboutImg} alt='card-img' />
      </div>
      <div className="btn-content">
        <Button onClick={onClose} variant= "glass" classname= "back-btn">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <span className="back-text">Back</span>
        </Button>
        <div className="about-card">
          <div className="heading">
            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
            <h1></h1>
            <span className='cursor'>|</span>
          </div>
          <div className="about-content">
            <p>
              I’m a passionate Full Stack Developer focused on building modern, 
              responsive, and scalable web applications. I enjoy working across the 
              entire development process—from designing intuitive user interfaces to 
              building reliable backend systems and connecting everything through 
              well-structured APIs.
            </p>
            <p>
              On the frontend, I work with technologies such as React, JavaScript, TypeScript, 
              HTML, CSS, and modern UI tools, with a strong focus on responsive design, interactive 
              experiences, and clean component-based architecture. On the backend, I enjoy working with 
              server-side development, PHP, databases, APIs, and application logic to build complete end-to-end 
              solutions.
            </p>
            <p>
              Beyond development, I’m continuously improving my Data Structures, Algorithms, problem-solving, and 
              software engineering skills. I believe in learning by building, experimenting with new technologies, 
              and constantly improving the way I write and structure code.
            </p>
            <p>
              I enjoy taking projects from an initial idea to a complete working product. Whether it's designing the 
              interface, developing the frontend, building backend functionality, integrating APIs, or working with 
              databases, I like understanding how all the pieces fit together to create a reliable application.
            </p>
          </div>
        </div>
      </div>
      <div className="download-resume">
        <a href={resume} download="Suvam-Bhadra-Resume.pdf" className="resume-download">
          <Button variant="glass" classname="resume-btn">
          <FontAwesomeIcon icon={faDownload} />
          Download Resume
        </Button>
        </a>
      </div>
    </Container>
  )
}

export default AboutCard