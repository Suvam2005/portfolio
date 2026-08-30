import './projects.css'
import { projectsData } from './Projectsdata'
import Button from '../../../../ui/Button'
const Projects = () => {
  return (
        <div className="cards">
          {projectsData.map((projectData) => {
            return(
              <>
                <div className="project-card" key={projectData.key}>
                  <img src= {projectData.images} alt='projects'/>
                  <div className="lower-band">
                    <p>{projectData.techstack}</p>
                    <a href= {projectData.link}>
                      <Button variant= "live-demo-btn">Live Demo</Button>
                    </a>
                  </div>
                </div>
              </>
            )
          })}
        </div>
  )
}

export default Projects