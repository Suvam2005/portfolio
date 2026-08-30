import './techstack.css'
import { Techstackdatas } from './Techstacksdata'
const Techstack = () => {
  return (
    <div className="techStack">
      {Techstackdatas.map((techstackData) => {
        return(
          <>
          <div className= {`tech-cards ${techstackData.classname || " "}`} key={techstackData.key} style={{"--hover-color" : techstackData.hoverColor}}>
            <div className="tech-content">
              <img src= {techstackData.image} alt='tech-stack'/>
              <p>{techstackData.name}</p>
            </div>
          </div>
          </>
        )
      })}
    </div>
  )
}

export default Techstack